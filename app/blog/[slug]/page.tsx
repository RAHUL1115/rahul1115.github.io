import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPost, getAllSlugs, getAllPostsMeta } from '#/lib/blog';
import BackOnEscape from '#/components/BackOnEscape';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — rahul gupta`, description: post.excerpt };
}

const STOP = new Set(['the','and','for','are','but','not','you','all','can','her','was','one','our','out','day','get','has','him','his','how','its','who','did','let','put','say','she','too','use','that','this','with','have','from','they','will','been','were','said','each','what','when','your','more','also','into','than','then','some','them','these','would','other','about','which','their','there','after','being','could','every','first','just','like','make','many','most','over','such','time','well','only','very','even','here','much','new','now','see','way','made','take','know','come','its','per','via']);

function tokenize(text: string): Map<string, number> {
  const freq = new Map<string, number>();
  text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/)
    .filter(w => w.length > 2 && !STOP.has(w))
    .forEach(w => freq.set(w, (freq.get(w) || 0) + 1));
  return freq;
}

function cosineSim(a: Map<string, number>, b: Map<string, number>): number {
  let dot = 0;
  a.forEach((n, w) => { dot += n * (b.get(w) || 0); });
  const mag = (m: Map<string, number>) => { let s = 0; m.forEach(n => { s += n * n; }); return Math.sqrt(s); };
  const denom = mag(a) * mag(b);
  return denom ? dot / denom : 0;
}

function postVector(p: { title: string; excerpt: string; tags: string[] }): Map<string, number> {
  const tagBoost = p.tags.map(t => `${t} ${t} ${t} ${t}`).join(' ');
  return tokenize(`${p.title} ${p.title} ${p.excerpt} ${tagBoost}`);
}

function getRelated(current: { slug: string; title: string; excerpt: string; tags: string[] }, limit = 3) {
  const vec = postVector(current);
  return getAllPostsMeta()
    .filter(p => p.slug !== current.slug)
    .map(p => ({ ...p, score: cosineSim(vec, postVector(p)) }))
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score || b.date.localeCompare(a.date))
    .slice(0, limit);
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = getRelated(post);

  return (
    <div className="terminal">
      <BackOnEscape />
      <header className="tbar">
        <div className="dots"><i /><i /><i /></div>
        <div className="title">— rahul@amrahul: ~/writing/{slug} — zsh —</div>
        <nav>
          <Link href="/blog">← writing</Link>
          <a href="/">home</a>
        </nav>
      </header>

      <div className="body-wrap">
        <article>
          <div className="prompt">
            <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~/writing</span><span className="sig">$</span>{' '}
            <span className="cmd">cat</span> <span className="arg">{slug}.md</span>
          </div>

          <div className="post-header">
            {post.draft && (
              <div className="draft-badge">DRAFT — not published</div>
            )}
            <h1 className="post-title">{post.title}</h1>
            {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
            <div className="post-meta-row">
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readingTime} min read</span>
              {post.tags.map(tag => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>
          </div>

          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {related.length > 0 && (
            <div className="related-posts">
              <div className="related-label">// related</div>
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="related-post">
                  <span className="related-date">{p.date}</span>
                  <span className="related-title">{p.title}</span>
                  <span className="related-arr">→</span>
                </Link>
              ))}
            </div>
          )}

          <div className="post-footer">
            <Link href="/blog" className="btn">← all posts</Link>
            <a href="/" className="btn">~/home</a>
          </div>
        </article>
      </div>
    </div>
  );
}
