import type { Metadata } from "next";
import { aboutContent, siteConfig } from "@/data/site";
import { Button } from "@/components/shared/Button";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "About",
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <section className="section-gold">
        <div className="section-padding mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">
            {aboutContent.hero}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
            {aboutContent.tagline}
          </h1>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-2 border-white/30 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl bg-white">
        <ul className="max-w-3xl space-y-4">
          {aboutContent.story.map((paragraph) => (
            <li
              key={paragraph.slice(0, 40)}
              className="flex gap-3 leading-relaxed text-[rgba(115,119,127,0.7)]"
            >
              <span className="font-bold text-gold" aria-hidden>
                •
              </span>
              {paragraph}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-light">
        <div className="section-padding mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            {aboutContent.experience.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[rgba(115,119,127,0.7)]">
            {aboutContent.experience.description}
          </p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          {aboutContent.features.map((feature) => (
            <article
              key={feature.title}
              className="border-2 border-border bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[rgba(115,119,127,0.7)]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl bg-white text-center">
        <h2 className="text-2xl font-semibold text-primary">
          {aboutContent.fullService.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[rgba(115,119,127,0.7)]">
          {aboutContent.fullService.description}
        </p>
        <div className="mt-8">
          <Button href={siteConfig.scheduleHref(locale as Locale)}>
            {aboutContent.fullService.cta}
          </Button>
        </div>
      </section>
    </>
  );
}
