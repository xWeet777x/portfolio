"use client";

import type { AnchorHTMLAttributes } from "react";

type GlowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

export function GlowLink({ label, className = "", ...props }: GlowLinkProps) {
  return (
    <a {...props} className={`glow-link ${className}`.trim()}>
      <span className="glow-link__label">{label}</span>
      <span className="glow-link__icon" aria-hidden="true">↗</span>
    </a>
  );
}
