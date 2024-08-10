import { Button } from "@/components/ui/button";
import HandDrawArrowRightIcon from "../../components/icon/HndDrawArrowEightIcon";

export default function SectionAboutMe() {
  return (
    <section className="w-full fullWidthPadding">
      <div className="pt-4 md:pt-8 pb-8">
        <h2 className="flex flex-row flex-nowrap items-center gap-2 text-2xl font-bold pb-2">
          <span>想知道這裡在做什麼</span>
          <span className="flex h-2 w-2 rounded-full bg-foreground" />
          <span className="flex h-2 w-2 rounded-full bg-foreground" />
          <span className="flex h-2 w-2 rounded-full bg-foreground" />
        </h2>
        <div className="text-foreground pb-4">
          <ListItem>
            <span>誰是廖仲逸 Lyle Liao？</span>
          </ListItem>
          <ListItem>
            <span>廖仲逸 Lyle Liao 將要做什麼？</span>
          </ListItem>
          <ListItem>
            <span>這是哪裡？為何要訂閱？</span>
          </ListItem>
          <ListItem>
            <span>還有哪裡有廖仲逸 Lyle Liao？</span>
          </ListItem>
        </div>
        <div className="flex flex-col items-center">
          <Button
            asChild
            variant="link"
            className="underline-offset-8 hover:underline-offset-4 underline transition-all"
          >
            <a href="https://lyleliao.substack.com/about" target="_blank">
              一切都在「關於我」，前往查看
              <i className="size-6 text-foreground ml-1 -rotate-12">
                <HandDrawArrowRightIcon />
              </i>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ListItem({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="flex flex-row flex-nowrap items-center gap-2 pl-2">
      <span className="flex h-2 w-2 rounded-full bg-foreground" />
      {children}
    </p>
  );
}
