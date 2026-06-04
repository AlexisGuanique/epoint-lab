import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" sections={privacySections} />;
}
