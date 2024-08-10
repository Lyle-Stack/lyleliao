import Footer from "@/app/(components)/Footer";
import Navbar from "@/app/(components)/navbar";
import SectionAboutMe from "@/app/(components)/SectionAboutMe";
import SectionHero from "@/app/(components)/SectionHero";
import SectionSocialMedia from "@/app/(components)/SectionSocialMedia";
import SectionSubstack from "@/app/(components)/SectionSubstack";
import SeparaterText from "@/components/SeparaterText";

export default function Home() {
  return (
    <main className="min-h-svh pt-16">
      <Navbar />
      <SectionHero />
      <SectionSocialMedia />
      <SectionSubstack />
      <div className="fullWidthPadding">
        <SeparaterText>
          <span className="px-2 text-xs text-muted">Or</span>
        </SeparaterText>
      </div>
      <SectionAboutMe />
      <Footer />
    </main>
  );
}
