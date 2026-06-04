"use client";

import { useState } from "react";
import { homeContent } from "@/data/site";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-light">
      <div className="section-padding mx-auto max-w-7xl">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl font-semibold uppercase tracking-wide text-primary md:text-3xl">
          {homeContent.faqTitle}
        </h2>
        <div className="mt-10 space-y-3">
          {homeContent.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden border-2 border-border bg-white shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full min-h-[44px] items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-primary md:text-base"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`shrink-0 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t-2 border-border px-5 pb-5 pt-2 text-sm leading-relaxed text-[rgba(115,119,127,0.7)]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
