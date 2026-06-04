import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { siteConfig } from "@/data/site";

type FooterProps = { locale: Locale };

export function Footer({ locale }: FooterProps) {
  const base = `/${locale}`;

  return (
    <footer className="mt-auto section-green">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-white">
              Easy way to contact us :
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-gold hover:underline"
            >
              <strong>{siteConfig.email}</strong>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-white hover:text-gold"
            >
              <strong>{siteConfig.phone}</strong>
            </a>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Where to find us:</p>
            <address className="mt-2 not-italic text-sm leading-relaxed text-white/90">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.suite}
              <br />
              {siteConfig.address.country}
            </address>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <Link
              href={`${base}/privacy-policy`}
              className="text-white/90 hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href={`${base}/term-of-services`}
              className="text-white/90 hover:text-gold"
            >
              Terms of service
            </Link>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-white/80">
          {siteConfig.disclaimer}
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/20 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.copyright}</p>
          <a
            href={siteConfig.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            {siteConfig.credit.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
