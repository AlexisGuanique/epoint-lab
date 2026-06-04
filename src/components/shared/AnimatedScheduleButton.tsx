import Link from "next/link";
import type { ReactNode } from "react";

type AnimatedScheduleButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function AnimatedScheduleButton({
  href,
  children,
  className = "",
}: AnimatedScheduleButtonProps) {
  return (
    <Link
      href={href}
      className={`btn-schedule-animated group relative inline-flex items-center justify-center overflow-hidden border-2 border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white ${className}`}
    >
      <span className="btn-schedule-animated__shine" aria-hidden />
      <span className="btn-schedule-animated__glow" aria-hidden />
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
        {children}
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
