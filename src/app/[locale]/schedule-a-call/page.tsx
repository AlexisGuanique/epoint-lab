import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Schedule a Call",
};

export default function ScheduleCallPage() {
  return (
    <section className="section-padding mx-auto max-w-4xl bg-white">
      <h1 className="text-3xl font-semibold text-primary md:text-4xl">
        Schedule a Call
      </h1>
      <p className="mt-4 text-[rgba(115,119,127,0.7)]">
        Book a consultation with our e-commerce experts. You can also reach us
        directly at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-gold">
          {siteConfig.email}
        </a>{" "}
        or {siteConfig.phone}.
      </p>
      <div className="mt-10 overflow-hidden border-2 border-border bg-surface p-8">
        <p className="text-center text-sm text-[rgba(115,119,127,0.7)]">
          Embed your Calendly or scheduling widget here.
        </p>
        <div className="mt-6 flex min-h-[320px] items-center justify-center border-2 border-dashed border-border bg-white">
          <a
            href={`mailto:${siteConfig.email}?subject=Schedule%20a%20Call`}
            className="border-2 border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary/90"
          >
            Email us to schedule
          </a>
        </div>
      </div>
    </section>
  );
}
