import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  draft: boolean;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function shouldInclude(draft: boolean): boolean {
  if (process.env.NODE_ENV === 'development') return true;
  return !draft;
}

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '');
      const { data } = matter(fs.readFileSync(path.join(postsDir, filename), 'utf8'));
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? '',
        draft: data.draft === true,
      };
    })
    .filter(p => shouldInclude(p.draft))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllSlugs(): string[] {
  return getAllPostsMeta().map(p => p.slug);
}

export async function getPost(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
  if (!shouldInclude(data.draft === true)) return null;

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? '',
    draft: data.draft === true,
    contentHtml: processed.toString(),
  };
}
