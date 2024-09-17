import ButtonCopy from "@/components/ButtonCopy";

export default function V2Footer() {
  return (
    <footer className="fullWidthPadding">
      <div className="bg-foreground rounded-2xl rounded-bl-none p-4">
        <p className="footerLinks text-muted text-center text-sm">
          This site is built and designed by myself with{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
          ,{" "}
          <a href="https://ui.shadcn.com/" target="_blank">
            shadcn/ui
          </a>
          ,{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </a>
          , and hosted on{" "}
          <a href="https://vercel.com/" target="_blank">
            Vercel
          </a>
          .
        </p>
      </div>
      <div className="flex flex-row flex-nowrap gap-4">
        <p className="flex flex-col">
          <span className="relative -z-10 inline-block flex-1 bg-foreground rounded-b-2xl before:-right-6 before:top-0 before:rounded-tl-3xl before:w-6 before:h-12 before:bg-transparent before:absolute before:shadow-[0_-24px_0_0_#221212]"></span>
          <span className="footerLinks py-2 px-4 text-xs">
            source code is available on{" "}
            <a href="https://github.com/Lyle-Stack/lyleliao" target="_blank">
              GitHub
            </a>
          </span>
        </p>
        <div className="bg-secondary rounded-2xl flex-1 mt-4 text-sm">
          <div className="footerLinks text-right p-4">
            Get in touch with me via{" "}
            <a href="https://www.linkedin.com/in/lyleliao" target="_blank">
              LinkedIn
            </a>{" "}
            or contact@lyleliao.com
            <ButtonCopy textToBeCopied="contact@lyleliao.com" />
            <p>
              <a
                href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to Resume Page"
              >
                Download
              </a>{" "}
              my resume or{" "}
              <a href="/v2/resume" target="">
                view it on site
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
