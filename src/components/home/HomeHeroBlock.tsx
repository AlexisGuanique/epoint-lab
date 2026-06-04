import type { Locale } from "@/lib/locales";
import { homeContent } from "@/data/site";
import { HomeHeader } from "@/components/layout/HomeHeader";
import { HeroAnimatedBackground } from "@/components/home/HeroAnimatedBackground";

type HomeHeroBlockProps = { locale: Locale };

export function HomeHeroBlock({ locale }: HomeHeroBlockProps) {
  const { hero } = homeContent;

  return (
    <section className="home-hero-block">
      <div className="home-hero-header">
        <HomeHeader locale={locale} />
      </div>

      <div className="hero-brz-bg hero-brz-bg__body">
        <HeroAnimatedBackground />
        <div className="hero-brz-bg__content relative z-10 flex min-h-full w-full flex-col items-center justify-center text-center">
          <div className="section-padding mx-auto w-full max-w-5xl pb-20 pt-8 md:pb-28 md:pt-12">
            <p className="animate-fade-up text-base font-bold uppercase tracking-[0.15em] md:text-lg [animation-delay:0.05s]">
              <span className="text-white">{hero.eyebrow.white}</span>
              <span className="text-brz-gold">{hero.eyebrow.gold}</span>
            </p>
            <h1 className="animate-fade-up mx-auto mt-5 max-w-5xl text-[2rem] font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-[3.75rem] [animation-delay:0.1s]">
              <span className="text-white">{hero.title.white}</span>
              <span className="text-brz-gold">{hero.title.gold}</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-7 max-w-3xl text-2xl font-normal leading-snug text-brz-gold md:text-3xl [animation-delay:0.18s]">
              {hero.subtitle}
            </p>
            <p className="animate-fade-up mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-brz-gold md:text-2xl [animation-delay:0.26s]">
              {hero.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
