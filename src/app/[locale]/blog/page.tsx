import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const base = `/${locale}/blog`;

  return (
    <section className="section-padding mx-auto max-w-7xl bg-white">
      <h1 className="text-3xl font-semibold text-primary md:text-4xl">E-Blog</h1>
      <p className="mt-4 max-w-2xl text-[rgba(115,119,127,0.7)]">
        Insights on e-commerce automation, logistics, and marketplace growth.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border-2 border-border bg-white p-6 transition-colors hover:border-primary"
          >
            <time className="text-xs text-muted">{post.date}</time>
            <h2 className="mt-2 text-xl font-bold">{post.title}</h2>
            <p className="mt-3 text-sm text-[rgba(115,119,127,0.7)]">
              {post.excerpt}
            </p>
            <Link
              href={`${base}/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
