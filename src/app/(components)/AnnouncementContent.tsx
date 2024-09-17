import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import Link from "next/link";

export default function AnnouncementContent() {
  return (
    <>
      <DialogHeader>
        <h3 className="text-lg font-semibold leading-tight">
          Version 2 is About Me
          <br />
          As A Full-Stack Developer
        </h3>

        <div className="text-sm text-muted-foreground">
          Not only a new site, but practicing following skills with Next.js &
          TailwindCSS:
          <ul className="list-disc list-outside pl-6 text-muted-foreground">
            {[
              "Implementing complex routes layouts and responsive design with TailwindCSS.",
              "Utilizing Route Groups to create a structured and maintainable routing system.",
              "Leveraging Parallel Routes to optimize page loading (not necessary but for practicing purpose).",
              "Implementing Intercepting Routes to handle introducing version 2 of my site.",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </DialogHeader>
      <DialogFooter className="footerLinks">
        <Link href="/v2" prefetch={false} target="_blank" className="uppercase">
          Go To See It
        </Link>
      </DialogFooter>
    </>
  );
}
