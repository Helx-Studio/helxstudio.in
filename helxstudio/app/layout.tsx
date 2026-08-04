import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/Advancments/SmoothScrool";
import localFont from "next/font/local";
const Mistral = localFont({
  variable: "--font-Main",
  src: "../components/font/ALTMistral-Medium.woff2",
});

const inter = Inter({
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Helx Studio | Web Design & Development for Startups",
  description:
    "Helx Studio designs and builds fast, high-converting websites for growing startups. From idea to launch — beautifully built, engineered to perform.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "web design",
    "web development",
    "startup websites",
    "creative agency",
  ],
  openGraph: {
    title: "Helx Studio | Web Design & Development for Startups",
    description:
      "Helx Studio designs and builds fast, high-converting websites for growing startups. From idea to launch — beautifully built, engineered to perform | helxstudio@gmail.com",
    url: "https://helxstudio.in",
    siteName: "Helx Studio",
    images: [
      {
        url: "./og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helx Studio | Web Design & Development for Startups",
    description:
      "Helx Studio designs and builds fast, high-converting websites for growing startups. From idea to launch — beautifully built, engineered to perform | helxstudio@gmail.com",
    images: ["./og-image.png"],
    creator: "@hiteshxdev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`  ${Mistral.variable}  ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
