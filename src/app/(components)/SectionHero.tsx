/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J2Jhzx7scls
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Quote from "../../components/icon/quote";

// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import lyleHero from "../../public/lyleHero.svg";

export default function SectionHero() {
  return (
    <section className="bg-secondary w-full fullWidthPadding">
      <div className="pt-4 md:pt-8">
        <h1 className="text-lg font-bold pb-4 md:pb-0 text-foreground">
          廖仲逸 Lyle Liao
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-72 aspect-square relative -mt-10 md:mt-0">
            {/* <Image
              fill
              src={lyleHero}
              layout="fill"
              objectFit="cover"
              alt="廖仲逸 Lyle Liao"
            /> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="廖仲逸 Lyle Liao"
              loading="lazy"
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
              src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/lyleHero.95f30b8b.svg"
            ></img>
          </div>
          <h2 className="text-4xl text-foreground font-extrabold flex flex-col w-full">
            <span className="pl-[max((100%_-396px)_/_2,_0px)] self-start">
              <i className="w-8 inline-block">
                <Quote />
              </i>
            </span>
            <span className="self-center">
              懶出生產力
              <br />
              怪出創造力
              <br />
              又懶又怪 輕鬆自在
            </span>
            <span className="pr-[max((100%_-396px)_/_2,_0px)] self-end">
              <i className="w-8 rotate-180 inline-block">
                <Quote />
              </i>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
