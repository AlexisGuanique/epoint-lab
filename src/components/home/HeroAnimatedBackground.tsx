import Image from "next/image";
import { images } from "@/styles/theme";

export function HeroAnimatedBackground() {
  return (
    <div className="hero-brz-bg__media" aria-hidden>
      <div className="hero-brz-bg__image-wrap">
        <Image
          src={images.heroBg}
          alt=""
          fill
          className="hero-brz-bg__image hero-brz-bg__image--animate"
          priority
          sizes="100vw"
        />
      </div>

      <div className="hero-brz-bg__rings">
        <span className="hero-ring hero-ring--outer" />
        <span className="hero-ring hero-ring--mid" />
        <span className="hero-ring hero-ring--inner" />
        <span className="hero-ring hero-ring--accent" />
      </div>

      <div className="hero-brz-bg__color" />
    </div>
  );
}
