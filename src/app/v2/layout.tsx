import type { Metadata } from "next";
import Footer from "./(components)/Footer";

export const metadata: Metadata = {
  description:
    "Introduction of Lyle Liao, A Full-Stack web Developer with productive, patient, enthusiasm in frontend and AI technology.",
  keywords: ["廖仲逸", "Lyle Liao", "Full stack web developer"],
  openGraph: {
    url: "https://lyleliao.com/v2",
    description:
      "Introduction of Lyle Liao, A Full-Stack web Developer with productive, patient, enthusiasm in frontend and AI technology.",
  },
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-svh py-4 flex flex-col gap-4">
      {children}
      <Footer />
    </main>
  );
}
