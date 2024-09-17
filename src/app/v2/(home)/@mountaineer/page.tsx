import MountainIcon from "@/components/icon/MountainIcon";
import { Badge } from "@/components/ui/badge";

export default function Mountaineer() {
  return (
    <div className="fullWidthPadding" id="mountaineer">
      <div className="bg-white rounded-2xl">
        <header className="grid grid-cols-[auto_1fr]">
          <div className="relative bg-background rounded-br-2xl p-2 flex items-center justify-center before:absolute before:-right-8 before:top-0 before:w-8 before:h-8 before:bg-transparent before:rounded-tl-2xl before:shadow-[0_-16px_0_0_#EAE9EF] after:absolute after:left-0 after:-bottom-8 after:w-8 after:h-8 after:bg-transparent after:rounded-tl-2xl after:shadow-[0_-16px_0_0_#EAE9EF]">
            <MountainIcon />
          </div>
          <h3 className="flex-1 p-4 text-xl flex items-center justify-center">
            <span>
              Scaling Peaks, Crafting Code: The Developer&apos;s Ascent
            </span>
          </h3>
        </header>

        <div className="pt-4 flex flex-col gap-4 text-sm">
          <p className="px-4">
            In the world of web development, I&apos;m not just a coder; Just as
            a climber charts their route, I map out the architecture of a
            complex application. I anticipate challenges, prepare for the
            unexpected, and adapt when the terrain shifts. Whether it&apos;s
            debugging a stubborn piece of code or optimizing performance, I
            embrace the climb.
          </p>

          <div className="flex flex-row flex-nowrap items-center">
            <p className="px-4 flex-1">
              The thrill lies not just in reaching the peak, but in the journey
              itself — <br />
              - the lessons learned,
              <br />- the obstacles overcome, <br />- the satisfaction of
              building something from the ground up.
            </p>
            <div className="w-1/2 max-w-72 p-4 pr-0 bg-background rounded-l-3xl relative before:right-0 before:-top-8 before:rounded-br-2xl before:w-4 before:h-8 before:bg-transparent before:absolute before:z-10 before:shadow-[0_16px_0_0_#EAE9EF] after:right-0 after:-bottom-8 after:rounded-tr-2xl after:w-4 after:h-8 after:bg-transparent after:absolute after:z-10 after:shadow-[0_-16px_0_0_#EAE9EF]">
              <div className="w-full aspect-square md:aspect-video relative rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Submit of Elbrus"
                  loading="lazy"
                  decoding="async"
                  src="https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/OLXA7419.webp"
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
          </div>
        </div>

        <footer className="p-4">
          <div className="flex flex-row flex-nowrap justify-end gap-2 items-center">
            <Badge variant="secondary" className="text-base">
              Skills
            </Badge>
            <span>&</span>
            <Badge variant="secondary" className="text-base">
              Attitude
            </Badge>
          </div>
        </footer>
      </div>
    </div>
  );
}
