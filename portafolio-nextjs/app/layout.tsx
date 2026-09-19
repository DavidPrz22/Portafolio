import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidperezdev.com"),
  title: "David Pérez | Full-Stack Developer",
  description:
    "Full-Stack Developer specialized in TypeScript, Python, and React. Building efficient, results-oriented web and desktop solutions.",
  keywords: [
    "David Pérez",
    "Full-Stack Developer",
    "TypeScript",
    "Python",
    "React",
    "NestJS",
    "Django",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "David Pérez" }],
  creator: "David Pérez",
  publisher: "David Pérez",
  openGraph: {
    title: "David Pérez | Full-Stack Developer",
    description:
      "Full-Stack Developer specialized in TypeScript, Python, and React. Building efficient, results-oriented web and desktop solutions.",
    url: "https://davidperezdev.com",
    siteName: "David Pérez Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "David Pérez - Full-Stack Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Pérez | Full-Stack Developer",
    description:
      "Full-Stack Developer specialized in TypeScript, Python, and React. Building efficient, results-oriented web and desktop solutions.",
    images: ["/og-image.png"],
    creator: "@davidperezdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
