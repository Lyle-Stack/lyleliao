import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "廖仲逸 Lyle Liao",
  description:
    "幫助在人生中迷路的大家，認識自我價值，認識AI（成為合格咒術師），有步驟的前進。成為身處領域的關鍵影響人，並提高個人價值。達到真正的「做自己」。",
  authors: {
    name: "廖仲逸 Lyle Liao",
    url: "#",
  },
  keywords: ["廖仲逸", "Lyle Liao", "生產力", "創造力"],
  referrer: "origin",
  creator: "廖仲逸 Lyle Liao",
  publisher: "廖仲逸 Lyle Liao",
  robots: "index, follow",
  alternates: { canonical: "https://lyleliao.com" },
  openGraph: {
    type: "website",
    url: "https://lyleliao.com",
    title: "廖仲逸 Lyle Liao",
    description:
      "幫助在人生中迷路的大家，認識自我價值，認識AI（成為合格咒術師），有步驟的前進。成為身處領域的關鍵影響人，並提高個人價值。達到真正的「做自己」。",
    siteName: "廖仲逸 Lyle Liao",
    images: [
      {
        url: "https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/opengraph.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images:
      "https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/opengraph.png",
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background">{children}</body>
    </html>
  );
}
