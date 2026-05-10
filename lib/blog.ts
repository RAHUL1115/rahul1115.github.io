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
  readingTime: number;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function readingTime(content: string): number {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
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
      const { data, content } = matter(fs.readFileSync(path.join(postsDir, filename), 'utf8'));
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? '',
        draft: data.draft === true,
        readingTime: readingTime(content),
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
    readingTime: readingTime(content),
    contentHtml: processed.toString(),
  };
}
