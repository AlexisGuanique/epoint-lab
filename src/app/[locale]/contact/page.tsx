import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { offices } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-gold">
        <div className="section-padding mx-auto max-w-7xl">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Contact Information
          </h1>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl bg-white">
        <h2 className="text-xl font-semibold text-primary">Our offices</h2>
        <p className="mt-2 text-[rgba(115,119,127,0.7)]">
          Contact one of our departments to talk to us
        </p>
      </section>

      <section className="section-padding mx-auto max-w-7xl bg-white">
        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office) => (
            <article
              key={office.city}
              className="border-2 border-primary p-6"
            >
              <h3 className="text-lg font-semibold text-primary">
                {office.city}, {office.country}
              </h3>
              <a
                href={`mailto:${office.email}`}
                className="mt-3 block text-gold hover:underline"
              >
                {office.email}
              </a>
              <a
                href={`tel:${office.phone.replace(/\s/g, "")}`}
                className="mt-2 block font-semibold text-foreground"
              >
                {office.phone}
              </a>
              <p className="mt-3 text-sm text-[rgba(115,119,127,0.7)]">
                {office.address}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding mx-auto max-w-3xl border-t border-border bg-white">
        <h2 className="text-xl font-semibold text-primary">
          Contact Epointlab/ Request Information
        </h2>
        <ContactForm />
      </section>
    </>
  );
}
