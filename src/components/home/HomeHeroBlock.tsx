import type { Locale } from "@/lib/locales";
import { homeContent } from "@/data/site";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { HeroAnimatedBackground } from "@/components/home/HeroAnimatedBackground";

type HomeHeroBlockProps = { locale: Locale };

export function HomeHeroBlock({ locale }: HomeHeroBlockProps) {
  const { hero } = homeContent;

  return (
    <section className="hero-brz-bg">
      <HeroAnimatedBackground />
      <div className="relative z-10">
        <HomeHeader locale={locale} />
        <div className="section-padding mx-auto max-w-7xl pb-16 pt-2 md:pb-20">
          <p className="animate-fade-up text-sm font-bold uppercase tracking-[0.15em] text-brz-gold [animation-delay:0.1s]">
            {hero.eyebrow}
          </p>
          <h1 className="animate-fade-up mt-4 max-w-4xl text-4xl font-semibold leading-tight text-brz-gold md:text-5xl lg:text-[3.125rem] [animation-delay:0.2s]">
            {hero.title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-xl font-normal leading-snug text-brz-gold md:text-2xl [animation-delay:0.35s]">
            {hero.subtitle}
          </p>
          <p className="animate-fade-up mt-4 max-w-2xl text-lg leading-relaxed text-brz-gold [animation-delay:0.5s]">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
