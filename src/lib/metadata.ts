import type { Metadata } from "next";
import { siteData } from "@/config/siteData";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  icons?: string | URL;
  noIndex?: boolean;
};

export function constructMetadata({
  title = siteData.personalInfo.name + " - Portfolio",
  description = siteData.introTagline,
  image = `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`, // Default OG image
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
      creator: "@" + siteData.socialMedia.find(s => s.name.toLowerCase() === "twitter")?.url.split("/").pop(), // Example, assumes twitter handle in URL
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
