import Image from "next/image";
import { homeContent } from "@/data/site";

export function ElevateSection() {
  const { elevate } = homeContent;

  return (
    <section className="section-light">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-primary md:text-5xl">
              {elevate.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-6 space-y-2 text-lg text-[rgba(115,119,127,0.7)]">
              {elevate.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-4 text-lg font-semibold text-primary">
              {elevate.closing}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {elevate.images.map((img) => (
              <div
                key={img.alt}
                className="relative aspect-square overflow-hidden rounded-[10px] border-2 border-primary"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
