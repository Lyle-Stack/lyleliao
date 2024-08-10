import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  themeColor: "#ffbe00",
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
      <body className={`${inter.className} bg-background`}>{children}</body>
    </html>
  );
}
