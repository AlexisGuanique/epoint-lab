import type { LegalSection } from "@/data/legal";

type LegalPageProps = {
  title: string;
  sections: LegalSection[];
};

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <article className="section-padding mx-auto max-w-3xl bg-white">
      <h1 className="text-3xl font-semibold text-primary">{title}</h1>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-primary">
              {section.title}
            </h2>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 30)}
                className="mt-3 text-sm leading-relaxed text-[rgba(115,119,127,0.7)]"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
