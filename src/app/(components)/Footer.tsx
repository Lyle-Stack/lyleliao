import { Separator } from "@/components/ui/separator";
import ButtonCopy from "../../components/ButtonCopy";

export default function Footer() {
  return (
    <footer className="bg-foreground w-full fullWidthPadding border-t border-t-background">
      <div className="pt-16 sm:pt-8 pb-8 flex flex-col-reverse sm:flex-row gap-4">
        <p className="text-muted text-xs self-center text-center sm:text-left sm:self-end footerLinks">
          Built by 廖仲逸 Lyle Liao.
          <br />
          Builds with{" "}
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
          ,{" "}
          <a href="https://v0.dev/" target="_blank">
            V0
          </a>
          .
          <br />
          Hosting on{" "}
          <a href="https://vercel.com/" target="_blank">
            Vercel
          </a>
          .
          <br />
          The source code is available on{" "}
          <a href="#" target="_blank">
            GitHub
          </a>
          .
        </p>
        <div className="hidden sm:inline-block">
          <Separator orientation="vertical" />
        </div>
        <div className="inline-block sm:hidden">
          <Separator orientation="horizontal" />
        </div>
        <div
          id="contact"
          className="text-muted flex-1 text-center sm:text-right"
        >
          <p className="text-2xl font-bold pb-2">需要幫忙？</p>
          <p>感謝對「廖仲逸 Lyle Liao」感興趣。</p>
          <p>直接寄送 E-mail，將盡快給予回覆。</p>
          <div className="flex flex-row flex-nowrap gap-2 justify-center sm:justify-end items-center">
            <p>contact@lyleliao.com</p>
            <ButtonCopy textToBeCopied="contact@lyleliao.com" />
          </div>
        </div>
      </div>
    </footer>
  );
}
