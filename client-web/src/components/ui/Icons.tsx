import React from "react";

export type IconName =
  | "github"
  | "linkedin"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "copy"
  | "arrow";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    github: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.84a9.5 9.5 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
    linkedin: (
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.9 6.76 1.88 1.88 0 0 0 4.88 3ZM21 13.69c0-3.84-2.05-5.63-4.79-5.63-2.21 0-3.19 1.21-3.74 2.07V8.25H9.22V21h3.25v-6.32c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.31Z" />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </>
    ),
    moon: (
      <path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" />
    ),
    menu: (
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    ),
    close: (
      <path
        d="m6 6 12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    ),
    copy: (
      <>
        <path
          d="M8 8h11v12H8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5 16H3V4h11v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </>
    ),
    arrow: (
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
