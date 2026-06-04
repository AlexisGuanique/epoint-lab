"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { homeContent } from "@/data/site";

export function WhoWeWorkWithPartnersBand() {
  const { whoWeWorkWith } = homeContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`partners-band section-green ${visible ? "partners-band--visible" : ""}`}
      aria-labelledby="partners-band-title"
    >
      <div className="section-padding partners-band__inner">
        <h2 id="partners-band-title" className="partners-band__title">
          {whoWeWorkWith.title}
        </h2>
        <ul className="partners-band__logos">
          {whoWeWorkWith.logos.map((logo, index) => (
            <li
              key={logo.alt}
              className="partners-band__logo-item"
              style={{ "--logo-delay": `${0.15 + index * 0.2}s` } as CSSProperties}
            >
              <div className="partners-band__logo-wrap">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="partners-band__logo"
                  sizes="(max-width: 768px) 42vw, 320px"
                  priority
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
