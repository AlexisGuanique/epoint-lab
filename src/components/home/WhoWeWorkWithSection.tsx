import Image from "next/image";
import { homeContent } from "@/data/site";

export function WhoWeWorkWithSection() {
  const { whoWeWorkWith } = homeContent;

  return (
    <section className="who-we-work-detail section-green">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="who-we-work-detail__lead">
              {whoWeWorkWith.socialProof}
            </p>
            <p className="who-we-work-detail__body">
              {whoWeWorkWith.body}
            </p>
          </div>
          <div className="who-we-work-detail__image-frame relative aspect-[4/3] overflow-hidden rounded-[10px]">
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
