
import type { Metadata } from "next";
// Default metadata, not using translations for simplicity after removing next-international server helpers.
// You could import ptTranslations directly here if you want to source defaults from it.

type Props = {
  title?: string;
  description?: string;
  image?: string;
  icons?: string | URL;
  noIndex?: boolean;
};

export function constructMetadata({
  title = "Thiago Di Faria - Portfólio", // Default title in Portuguese
  description = "Portfólio de Thiago Di Faria, desenvolvedor de software.", // Default description in Portuguese
  image = `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`, // Ensure you have this image
  icons = "/favicon.ico", // Ensure you have this favicon
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
      // creator: "@yourTwitterHandle", // Update if you have one
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
