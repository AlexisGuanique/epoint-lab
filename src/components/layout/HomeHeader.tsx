"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { getNav, siteConfig } from "@/data/site";
import { AnimatedScheduleButton } from "@/components/shared/AnimatedScheduleButton";
import { BrandLogo } from "@/components/shared/BrandLogo";

type HomeHeaderProps = { locale: Locale };

const navLinkClass =
  "font-[family-name:var(--font-lato)] text-sm font-medium text-brz-gold transition-all duration-300 hover:opacity-80 hover:tracking-wide";

export function HomeHeader({ locale }: HomeHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = getNav(locale);
  const scheduleHref = siteConfig.scheduleHref(locale);
  const homeHref = `/${locale}`;

  return (
    <header className="relative z-50 border-b border-primary/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={homeHref} className="transition-opacity hover:opacity-90">
          <BrandLogo priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navLinkClass} ${
                pathname === item.href
                  ? "font-semibold underline underline-offset-4 decoration-gold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <AnimatedScheduleButton href={scheduleHref}>
            Schedule a Call
          </AnimatedScheduleButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border-2 border-gold text-brz-gold md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary/50 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 ${navLinkClass}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <AnimatedScheduleButton href={scheduleHref} className="mt-2 w-full">
              Schedule a Call
            </AnimatedScheduleButton>
          </nav>
        </div>
      )}
    </header>
  );
}
