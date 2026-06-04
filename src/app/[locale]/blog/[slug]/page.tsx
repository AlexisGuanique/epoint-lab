import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="section-padding mx-auto max-w-3xl bg-white">
      <Link
        href={`/${locale}/blog`}
        className="text-sm text-gold hover:underline"
      >
        ← Back to E-Blog
      </Link>
      <time className="mt-6 block text-sm text-muted">{post.date}</time>
      <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
      <p className="mt-6 leading-relaxed text-[rgba(115,119,127,0.7)]">
        {post.excerpt}
      </p>
      <p className="mt-4 leading-relaxed text-[rgba(115,119,127,0.7)]">
        Full article content would appear here. This rebuild includes sample
        posts where the original blog was empty.
      </p>
    </article>
  );
}
