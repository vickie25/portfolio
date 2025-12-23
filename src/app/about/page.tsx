import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

// Enable static generation with revalidation every hour
export const revalidate = 3600 // 1 hour in seconds

export const metadata: Metadata = {
  title: "About | Victor Nyandoro",
  description:
    "Learn more about Victor Nyandoro - Full StackDeveloper, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Victor Nyandoro",
    "About Victor",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "About | Victor Nyandoro",
    description:
      "Discover the story and journey of Victor Nyandoro in the world of web development.",
    url: "https://vickportfolio.vercel.app/about",
    siteName: "Victor Nyandoro",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://kinhdev.id.vn/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Kinh Dev About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Victor Nyandoro",
    description:
      "Learn more about Victor Nyandoro - Frontend Developer and tech enthusiast.",
    // images: ["https://vickportfolio.vercel.app/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://vickportfolio.vercel.app/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
