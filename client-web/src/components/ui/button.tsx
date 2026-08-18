import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "signal" | "ghost";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "ghost",
  href,
  external,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass = `button ${variant} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
