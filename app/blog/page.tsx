import Link from 'next/link';
import { getAllPostsMeta } from '#/lib/blog';
import BackOnEscape from '#/components/BackOnEscape';

export const metadata = {
  title: 'writing — rahul gupta',
  description: 'Notes from building things in production.',
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <div className="terminal">
      <BackOnEscape />
      <header className="tbar">
        <div className="dots"><i /><i /><i /></div>
        <div className="title">— rahul@amrahul: ~/writing — zsh —</div>
        <nav>
          <a href="/">← home</a>
        </nav>
      </header>

      <div className="body-wrap">
        <section>
          <div className="prompt">
            <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~/writing</span><span className="sig">$</span>{' '}
            <span className="cmd">ls</span> <span className="flag">-lt</span>
          </div>
          <h2 style={{ marginTop: 14 }}>// writing — notes from shipping things</h2>
          <div className="posts" style={{ marginTop: 20 }}>
            {posts.length === 0 ? (
              <p style={{ color: 'var(--muted)', fontSize: 13 }}>no posts yet.</p>
            ) : posts.map(post => (
              <Link key={post.slug} className="post" href={`/blog/${post.slug}`}>
                <span className="date">{post.date}</span>
                <span className="ttl">
                  {post.title}
                  {post.draft && <span style={{ color: 'var(--warn)', fontSize: 10, marginLeft: 8 }}>[draft]</span>}
                </span>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
