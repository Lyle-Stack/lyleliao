import { Button } from "@/components/ui/button";

import LinkedInIcon from "../../components/icon/LinkedInIcon";
import YouTubeIcon from "../../components/icon/YouTubeIcon";
import InstagramIcon from "../../components/icon/InstagramIcon";
import ThreadsIcon from "../../components/icon/ThreadsIcon";

function CustomizedSocialMediaButtom({
  href,
  ariaLabel,
  children,
}: Readonly<{ href: string; ariaLabel: string; children: React.ReactNode }>) {
  return (
    <Button
      asChild
      variant="ghost"
      className="hover:bg-transparent hover:opacity-70 transition-opacity"
      size="icon"
    >
      <a href={href} aria-label={ariaLabel} target="_blank">
        {children}
      </a>
    </Button>
  );
}

export default function SectionSocialMedia() {
  return (
    <section className="bg-foreground w-full fullWidthPadding">
      <div className="pt-4 md:pt-8 pb-8">
        <h2 className="flex flex-row flex-nowrap items-center gap-2 text-2xl text-secondary font-bold pb-2">
          <span>這裡有我的蹤影</span>
          <span className="flex h-2 w-2 rounded-full bg-secondary" />
          <span className="flex h-2 w-2 rounded-full bg-secondary" />
          <span className="flex h-2 w-2 rounded-full bg-secondary" />
        </h2>
        <p className="text-background pb-4">
          關注，收到新內容的通知。告訴我，你還想看什麼。
        </p>
        <div className="flex flex-row gap-6 justify-center">
          {/* LinkedIn */}
          <CustomizedSocialMediaButtom
            href="https://www.linkedin.com/in/lyleliao"
            ariaLabel="前往廖仲逸 Lyle Liao 的 LinkedIn"
          >
            <LinkedInIcon />
          </CustomizedSocialMediaButtom>
          {/* YouTube */}
          <CustomizedSocialMediaButtom
            href="https://www.youtube.com/@lyleliao"
            ariaLabel="前往廖仲逸 Lyle Liao 的 YouTube"
          >
            <YouTubeIcon />
          </CustomizedSocialMediaButtom>
          {/* Instagram */}
          <CustomizedSocialMediaButtom
            href="https://www.instagram.com/lyle.liao/"
            ariaLabel="前往廖仲逸 Lyle Liao 的 Instagram"
          >
            <InstagramIcon />
          </CustomizedSocialMediaButtom>
          {/* Threads */}
          <CustomizedSocialMediaButtom
            href="https://www.threads.net/@lyle.liao"
            ariaLabel="前往廖仲逸 Lyle Liao 的 Threads"
          >
            <ThreadsIcon />
          </CustomizedSocialMediaButtom>
        </div>
      </div>
    </section>
  );
}
