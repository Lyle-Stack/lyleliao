import DivingIcon from "@/components/icon/DivingIcon";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Diver() {
  return (
    <div className="fullWidthPadding" id="mountaineer">
      <div className="bg-white rounded-2xl">
        <header className="grid grid-cols-[1fr_auto]">
          <h3 className="flex-1 p-4 text-xl flex items-center justify-center">
            <span>
              Diving Deep, Building Together: A Developer&apos;s Submersion
            </span>
          </h3>
          <div className="relative bg-background rounded-bl-2xl p-2 flex items-center justify-center before:absolute before:-left-8 before:top-0 before:w-8 before:h-8 before:bg-transparent before:rounded-tr-2xl before:shadow-[0_-16px_0_0_#EAE9EF] after:absolute after:right-0 after:-bottom-8 after:w-8 after:h-8 after:bg-transparent after:rounded-tr-2xl after:shadow-[0_-16px_0_0_#EAE9EF]">
            <DivingIcon />
          </div>
        </header>

        <div className="pt-4 flex flex-col gap-4 text-sm">
          <p className="px-4">
            A diver navigates the depths, I navigate the complexities of code. I
            maintain my composure amidst challenges, focus intently on my tasks,
            and communicate effectively with my team. No matter it&apos;s
            collaborating on a new feature or troubleshooting an issue, I enjoy
            the dive.
          </p>

          <div className="flex flex-row flex-nowrap items-center">
            <div className="w-1/2 max-w-72 p-4 pl-0 bg-background rounded-r-3xl relative before:left-0 before:-top-8 before:rounded-bl-2xl before:w-4 before:h-8 before:bg-transparent before:absolute before:shadow-[0_16px_0_0_#EAE9EF] after:left-0 after:-bottom-8 after:rounded-tl-2xl after:w-4 after:h-8 after:bg-transparent after:absolute after:shadow-[0_-16px_0_0_#EAE9EF]">
              <div className="w-full aspect-square md:aspect-video relative rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Submit of Elbrus"
                  loading="eager"
                  decoding="async"
                  src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/P1024920.webp"
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
                ></img>
              </div>
            </div>
            <p className="px-4 flex-1">
              Not only in reaching the objective, but also in the journey itself
              — <br />
              - the shared discoveries,
              <br />- the collaborative problem-solving, <br />- the
              satisfaction of creating something remarkable as a team.
            </p>
          </div>
        </div>

        <footer className="p-4">
          <div className="flex flex-row flex-nowrap justify-start gap-2 items-center">
            <Badge variant="secondary" className="text-base">
              Teamwork
            </Badge>
            <span>&</span>
            <Badge variant="secondary" className="text-base">
              Explore
            </Badge>
          </div>
        </footer>
      </div>
    </div>
  );
}
