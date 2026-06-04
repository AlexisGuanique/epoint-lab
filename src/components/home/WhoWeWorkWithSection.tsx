import Image from "next/image";
import { homeContent } from "@/data/site";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhoWeWorkWithSection() {
  const { whoWeWorkWith } = homeContent;

  return (
    <section className="bg-white">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={whoWeWorkWith.title}
              title={whoWeWorkWith.subtitle}
            />
            <p className="mt-6 text-lg font-bold text-primary">
              {whoWeWorkWith.socialProof}
            </p>
            <p className="mt-4 leading-relaxed text-[rgba(115,119,127,0.7)]">
              {whoWeWorkWith.body}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border-[20px] border-primary">
            <Image
              src={whoWeWorkWith.image}
              alt={whoWeWorkWith.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
