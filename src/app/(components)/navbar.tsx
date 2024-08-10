/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xCFVYtohcBg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

// import Image from "next/image";
// import lyleLogo from "../../public/lyleLogo.svg";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-background border-b border-foreground fullWidthPadding py-2">
      <div className="flex justify-between flex-row items-center">
        <Link href="/" prefetch={false}>
          {/* <Image
            priority
            src={lyleLogo}
            alt="廖仲逸 Lyle Liao"
            height={48}
            width={86}
          /> */}
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
            src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyleLogo.90bdc02f.svg"
          ></img>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex-1 justify-evenly">
            <NavigationMenuLink asChild>
              <NavigationMenuItem>
                <Link href="#contact" prefetch={false}>
                  聯繫我
                </Link>
              </NavigationMenuItem>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
