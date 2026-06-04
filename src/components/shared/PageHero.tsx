import type { Locale } from "@/lib/locales";
import type { HeroContent } from "@/data/site";
import { HeroAnimatedBackground } from "@/components/home/HeroAnimatedBackground";

type PageHeroProps = {
  locale: Locale;
  content: HeroContent;
};

export function PageHero({ content }: PageHeroProps) {
  return (
    <section className="home-hero-block">
      <div className="hero-brz-bg hero-brz-bg__body">
        <HeroAnimatedBackground />
        <div className="hero-brz-bg__content relative z-10 flex min-h-full w-full flex-col items-center justify-center text-center">
          <div className="section-padding mx-auto w-full max-w-5xl pb-20 pt-8 md:pb-28 md:pt-12">
            {content.eyebrow && (
              <p className="animate-fade-up text-base font-bold uppercase tracking-[0.15em] md:text-lg [animation-delay:0.05s]">
                <span className="text-white">{content.eyebrow.white}</span>
                <span className="text-brz-gold">{content.eyebrow.gold}</span>
              </p>
            )}
            <h1
              className={`animate-fade-up mx-auto max-w-5xl text-[2rem] font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-[3.75rem] ${content.eyebrow ? "mt-5" : ""} [animation-delay:0.1s]`}
            >
              <span className="text-white">{content.title.white}</span>
              <span className="text-brz-gold">{content.title.gold}</span>
            </h1>
            {content.subtitle && (
              <p className="animate-fade-up mx-auto mt-7 max-w-3xl text-2xl font-normal leading-snug text-brz-gold md:text-3xl [animation-delay:0.18s]">
                {content.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
