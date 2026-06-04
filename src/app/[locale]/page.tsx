import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { ElevateSection } from "@/components/home/ElevateSection";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { HomeHeroBlock } from "@/components/home/HomeHeroBlock";
import { PartnerSection } from "@/components/home/PartnerSection";
import { WhoWeWorkWithSection } from "@/components/home/WhoWeWorkWithSection";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <HomeHeroBlock locale={locale as Locale} />
      <WhoWeWorkWithSection />
      <ElevateSection />
      <PartnerSection />
      <FAQAccordion />
      <CTASection locale={locale as Locale} />
    </>
  );
}
