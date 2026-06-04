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
  const pathname = usePathname();
  const homeHref = `/${locale}`;

  if (pathname === homeHref || pathname === `${homeHref}/`) {
    return null;
  }

  return <DefaultHeader locale={locale} pathname={pathname} />;
}

function DefaultHeader({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const nav = getNav(locale);
  const scheduleHref = siteConfig.scheduleHref(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
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
              variant="light"
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
          className="nav-menu-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold md:hidden"
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
        <div className="border-t border-border bg-gray-dark px-4 py-4 md:hidden">
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
