"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { getNav, siteConfig } from "@/data/site";
import { AnimatedScheduleButton } from "@/components/shared/AnimatedScheduleButton";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { NavLink } from "@/components/layout/NavLink";

type HeaderProps = { locale: Locale };

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = getNav(locale);
  const scheduleHref = siteConfig.scheduleHref(locale);
  const homeHref = `/${locale}`;

  return (
    <header className="site-header relative z-50">
      <div className="site-header__inner mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href={homeHref}
          className="nav-logo-link transition-transform duration-300 hover:scale-[1.02]"
        >
          <BrandLogo priority />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              variant="hero"
            />
          ))}
        </nav>

        <div className="hidden md:block">
          <AnimatedScheduleButton href={scheduleHref}>
            Schedule a Call
          </AnimatedScheduleButton>
        </div>

        <button
          type="button"
          className="nav-menu-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold text-brz-gold transition-all duration-300 hover:bg-gold/15 hover:scale-105 md:hidden"
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
        <div className="site-header__mobile border-t border-white/15 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
                variant="hero"
                onClick={() => setOpen(false)}
              />
            ))}
            <AnimatedScheduleButton href={scheduleHref} className="mt-3 w-full">
              Schedule a Call
            </AnimatedScheduleButton>
          </nav>
        </div>
      )}
    </header>
  );
}
