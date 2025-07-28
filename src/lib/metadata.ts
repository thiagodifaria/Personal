
import type { Metadata } from "next";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  icons?: string | URL;
  noIndex?: boolean;
};

export function constructMetadata({
  title = "Thiago Di Faria - Portfólio",
  description = "Portfólio de Thiago Di Faria, desenvolvedor de software.",
  image = `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  icons = "/favicon.ico",
  noIndex = false,
}: Props = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}