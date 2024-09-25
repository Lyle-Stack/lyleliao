import GithubIcon from "@/components/icon/GithubIcon";
import HandDrawArrowRightIcon from "@/components/icon/HandDrawArrowEightIcon";
import LinkedInIcon from "@/components/icon/LinkedInIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import V2Header from "../(components)/Header";

export default function V2() {
  return (
    <div className="fullWidthPadding">
      {/* top part */}
      <V2Header className="rounded-b-none md: rounded-bl-none" />
      {/* bottom part */}
      <div className="flex flex-col md:flex-row">
        {/* left part */}
        <div className="relative md:before:-right-8 md:before:top-0 md:before:rounded-tl-3xl md:before:w-8 md:before:h-16 md:before:bg-transparent md:before:absolute md:before:shadow-[0_-24px_0_0_#FFBE00]">
          <h1 className="w-full md:w-72 bg-secondary pt-4 pl-6 pr-2 whitespace-break-spaces text-xl leading-6 ">
            A<br />
            <strong className="uppercase">
              full-stack
              <br />
              web developer
            </strong>
            <br />
            dedicates to frontend using React/Next.js
          </h1>
          <div className="w-full md:w-72 aspect-square relative rounded-b-2xl overflow-hidden bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="廖仲逸 Lyle Liao"
              loading="eager"
              decoding="async"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: "cover",
                color: "transparent",
              }}
              // src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyleHero.95f30b8b.svg"
              src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyleHero.webp"
            ></img>
          </div>
        </div>
        {/* right part */}
        <div className="z-20 mt-4 md:ml-4 flex flex-col">
          <div className="p-4 flex-1 flex flex-row items-center bg-foreground text-background rounded-2xl rounded-br-none">
            <h2 className="text-sm">
              <span className="block text-2xl">
                I&apos;m a{" "}
                <Badge variant="secondary" className="text-base -translate-y-1">
                  digital
                </Badge>{" "}
                <span className="underline decoration-secondary decoration-2 decoration-wavy">
                  mountaineer
                </span>
              </span>
              <span className="block pl-4 pb-4">
                Projects are new summits to conquer, demanding grit, meticulous
                planning, and problem-solving skills forged in countless trails.
              </span>
              <span className="block text-2xl">
                I&apos;m, also, a{" "}
                <span className="underline decoration-secondary decoration-2 decoration-double">
                  digital
                </span>{" "}
                <Badge
                  variant="outline"
                  className="text-base border-secondary text-secondary -translate-y-1"
                >
                  diver
                </Badge>
              </span>
              <span className="block pl-4 pb-4">
                No two projects are alike, each one is a different underwater
                world to explore, demanding composure, focus, and teamwork honed
                in varied dives.
              </span>
            </h2>
          </div>
          {/* riht bottom part */}
          <div className="flex flex-row flex-nowrap">
            <div className="flex flex-row flex-nowrap gap-4 justify-center py-2 pl-4 pr-6">
              {/* LinkedIn */}
              <CustomizedSocialMediaButtom
                href="https://www.linkedin.com/in/lyleliao"
                ariaLabel="前往廖仲逸 Lyle Liao 的 LinkedIn"
              >
                <LinkedInIcon />
              </CustomizedSocialMediaButtom>
              {/* Substack */}
              <CustomizedSocialMediaButtom
                href="https://lyleliao.substack.com/"
                ariaLabel="前往廖仲逸 Lyle Liao 的 Substack"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Substack"
                  loading="eager"
                  decoding="async"
                  className="h-9"
                  src="/substack.png"
                ></img>
              </CustomizedSocialMediaButtom>
              {/* Substack */}
              <CustomizedSocialMediaButtom
                href="https://github.com/liaochungyid/"
                ariaLabel="前往廖仲逸 Lyle Liao 的 Github"
              >
                <GithubIcon />
              </CustomizedSocialMediaButtom>
            </div>
            <div className="relative flex flex-row justify-end items-center bg-foreground flex-1 rounded-b-2xl before:-left-4 before:top-0 before:rounded-tr-2xl before:w-4 before:h-8 before:bg-transparent before:absolute before:z-30 before:shadow-[0_-16px_0_0_#221212]">
              <Button
                asChild
                variant="link"
                className="underline-offset-8 text-background hover:underline-offset-4 underline transition-all"
              >
                <a href="/v2/resume">
                  See My Resume
                  <i className="size-6 ml-1 -rotate-12">
                    <HandDrawArrowRightIcon />
                  </i>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
