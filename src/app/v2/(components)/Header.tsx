/**
 * have to limit the width in upper layer
 */

import Link from "next/link";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function V2Header({ className }: HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "bg-secondary p-4 h-20 rounded-2xl flex flex-row flex-nowrap justify-between",
        className
      )}
    >
      <Link
        href="/v2"
        prefetch={false}
        className="bg-background inline-block rounded-xl px-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="廖仲逸 Lyle Liao"
          fetchPriority="high"
          width="86"
          height="48"
          decoding="async"
          data-nimg="1"
          style={{
            color: "transparent",
          }}
          // src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyleLogo.90bdc02f.svg"
          src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyleLogo.webp"
        ></img>
      </Link>
      <div className="flex flex-row items-center gap-4 footerLinks">
        <Link href="/v2/timeline" prefetch={false} className="uppercase">
          timeline
        </Link>
        <Link href="/v2/resume" prefetch={false} className="uppercase">
          resume
        </Link>
      </div>
    </nav>
  );
}
