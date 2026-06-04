import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactOfficesSection } from "@/components/contact/ContactOfficesSection";
import { PageHero } from "@/components/shared/PageHero";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <PageHero locale={locale as Locale} content={pageHeroes.contact} />
      <ContactOfficesSection />
      <ContactForm locale={locale as Locale} />
    </>
  );
}
