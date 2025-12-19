import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "Victor Nyandoro | Frontend Developer Portfolio",
  description:
    "Explore Victor Nyandoro's portfolio – a skilled Frontend Developer specializing in Next.js, React, and modern web technologies. Showcasing innovative projects, UI/UX expertise, and high-performance web applications.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Victor Nyandoro Portfolio",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Victor Nyandoro | Frontend Developer Portfolio",
    description:
      "Discover Victor Nyandoro's expertise in Frontend Development, React, and Next.js. View projects, case studies, and technical skills.",
    url: "https://kinhdev.id.vn",
    type: "website",
    images: [
      {
        url: "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
        width: 1200,
        height: 630,
        alt: "Victor Nyandoro - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Nyandoro | Frontend Developer Portfolio",
    description:
      "Explore Victor Nyandoro's frontend projects and expertise in React, Next.js, and modern web development.",
    images: [
      "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <head>
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://pbs.twimg.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://yt3.googleusercontent.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://assets.aceternity.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://voocgavdbpy2gucg.public.blob.vercel-storage.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for critical resources */}
        <link rel="dns-prefetch" href="https://api.vercel.com" />
        {/*
          Cleanup script to remove attributes injected by browser extensions
          (e.g. Bitwarden) before React hydration runs. This prevents
          hydration mismatch warnings without disabling the extension.
          The script is intentionally small, runs early, and observes
          the DOM for a short period to remove attributes that appear
          immediately after page load.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `;(function(){try{var prefixes=['bis_','__processed_'];function cleanse(root){if(!root||!root.querySelectorAll) return;var els=root.querySelectorAll('*');for(var i=0;i<els.length;i++){var el=els[i];var attrs=el.getAttributeNames&&el.getAttributeNames()||[];for(var j=0;j<attrs.length;j++){var a=attrs[j];if(!a) continue;for(var p=0;p<prefixes.length;p++){if(a.indexOf(prefixes[p])===0){el.removeAttribute(a);break;}}}}}cleanse(document.documentElement);cleanse(document.body);var observer=new MutationObserver(function(muts){muts.forEach(function(m){if(m.type==='attributes'&&m.target&&m.target.getAttributeNames){var attrs=m.target.getAttributeNames();for(var k=0;k<attrs.length;k++){var an=attrs[k];if(an&& (an.indexOf('__processed_')===0||an.indexOf('bis_')===0)){m.target.removeAttribute(an);}}} if(m.addedNodes&&m.addedNodes.length){for(var n=0;n<m.addedNodes.length;n++){var node=m.addedNodes[n];if(node.nodeType===1&&node.getAttributeNames){var nas=node.getAttributeNames();for(var z=0;z<nas.length;z++){var nna=nas[z];if(nna&&(nna.indexOf('__processed_')===0||nna.indexOf('bis_')===0)){node.removeAttribute(nna);}}}}}}});observer.observe(document.documentElement||document,{attributes:true,subtree:true,childList:true,attributeOldValue:true});setTimeout(function(){try{observer.disconnect();}catch(e){}},5000);}catch(e){console.warn('pre-hydration-cleanse',e);}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
