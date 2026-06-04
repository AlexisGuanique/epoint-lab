import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { ElevateSection } from "@/components/home/ElevateSection";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { ConsultSection } from "@/components/home/ConsultSection";
import { PageHero } from "@/components/shared/PageHero";
import { pageHeroes } from "@/data/site";
import { CustomerSuccessSection } from "@/components/home/CustomerSuccessSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { OperationsVideoSection } from "@/components/home/OperationsVideoSection";
import { WhoWeWorkWithPartnersBand } from "@/components/home/WhoWeWorkWithPartnersBand";
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
      <PageHero locale={locale as Locale} content={pageHeroes.home} />
      <ConsultSection />
      <WhoWeWorkWithPartnersBand />
      <OperationsVideoSection />
      <WhoWeWorkWithSection />
      <ElevateSection />
      <PartnerSection />
      <CustomerSuccessSection />
      <FAQAccordion />
      <CTASection locale={locale as Locale} />
    </>
  );
}
