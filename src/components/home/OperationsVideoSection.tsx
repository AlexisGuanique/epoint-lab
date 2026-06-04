import { homeContent } from "@/data/site";

export function OperationsVideoSection() {
  const { whoWeWorkWith } = homeContent;

  return (
    <section className="operations-video-section bg-white">
      <div className="section-padding operations-video-section__inner">
        <h2 className="operations-video-section__title">{whoWeWorkWith.subtitle}</h2>
        <div className="operations-video-section__media">
          <video
            className="operations-video-section__video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="E-commerce operations and logistics overview"
          >
            <source src={whoWeWorkWith.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
