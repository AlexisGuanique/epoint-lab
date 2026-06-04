import { homeContent } from "@/data/site";

export function PartnerSection() {
  const { partner } = homeContent;

  return (
    <section className="bg-white">
      <div className="section-padding mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-2xl font-semibold leading-snug text-primary md:text-3xl lg:text-4xl">
          {partner.heading}
        </h2>
        <p className="mt-8 text-lg font-semibold text-foreground">
          {partner.listTitle}
        </p>
        <ul className="mt-4 space-y-2">
          {partner.bullets.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[rgba(115,119,127,0.7)]"
            >
              <span className="mt-1 font-bold text-gold" aria-hidden>
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xl font-bold text-gold">{partner.stat}</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[rgba(115,119,127,0.7)]">
          {partner.body}
        </p>
      </div>
    </section>
  );
}
