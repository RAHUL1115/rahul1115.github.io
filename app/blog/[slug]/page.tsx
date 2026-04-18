import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPost, getAllSlugs } from '#/lib/blog';
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

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
            <div className="post-meta-row">
              <span className="post-date">{post.date}</span>
              {post.tags.map(tag => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>
          </div>

          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="post-footer">
            <Link href="/blog" className="btn">← all posts</Link>
            <a href="/" className="btn">~/home</a>
          </div>
        </article>
      </div>
    </div>
  );
}
