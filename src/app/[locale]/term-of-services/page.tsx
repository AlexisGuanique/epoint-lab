import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsSections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Term of Services",
};

export default function TermsPage() {
  return <LegalPage title="Terms of Service" sections={termsSections} />;
}
