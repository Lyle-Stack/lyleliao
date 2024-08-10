/* eslint-disable @next/next/no-img-element */
import { Button } from "../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SectionSubstack() {
  return (
    <section className="bg-background w-full fullWidthPadding">
      <div className="pt-4 md:pt-8 pb-8">
        <h2 className="text-2xl text-foreground font-bold h-7 flex flex-row gap-2 items-center">
          <span>內容主要會在</span>
          <img
            alt="Substack"
            loading="lazy"
            decoding="async"
            className="h-5"
            src="/substack_wordmark.png"
          ></img>
        </h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:bg-transparent px-0"
            >
              <i className="border border-popover-foreground mr-1 rounded-full">
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="inherit"
                >
                  <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z" />
                </svg>
              </i>
              <span className="text-muted-foreground text-xs">
                什麼是 Substack
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Substack
                  是一家美國在線平台，提供出版、支付、分析和設計基礎設施，以支持訂閱電子報。它允許作者直接向訂閱者發送數字電子報。Substack
                  成立於 2017 年，總部位於舊金山。
                  <br />
                  通過
                  Substack，任何人都可以創辦一個結合個人網站、博客和電子郵件通訊或播客的出版物。它快速簡單，因此不需要精通技術。
                  <br />
                  讓你的讀者可以直接通過訂閱向您付費，不會受到廣告的干擾。作家和播客們可以擁有自己的知識產權，保留他們的郵件列表，並開始媒體業務。
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <p>訂閱是一個無形，但充滿支持感，與祝福我的方法。</p>
        <iframe
          title="訂閱 廖仲逸 Lyle Liao 的 Substack"
          src="https://lyleliao.substack.com/embed"
          width="100%"
          height="150"
          style={{
            border: "0px solid #EEE",
            background: "transparent",
          }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
        <p className="py-2 w-full text-center">也可以，先前往看看裡面有什麼</p>
        <div className="flex flex-row flex-nowrap gap-2 justify-center">
          <Button asChild variant="outline">
            <a
              href="https://lyleliao.substack.com/"
              className="flex flex-row flex-nowrap items-center"
              target="_blank"
            >
              <span>前往我的</span>
              <img
                alt="Substack"
                loading="lazy"
                decoding="async"
                className="h-5"
                src="/substack.png"
              ></img>
              <span>首頁</span>
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://substack.com/@lyleliao"
              className="flex flex-row flex-nowrap items-center"
              target="_blank"
            >
              <span>前往我的</span>
              <img
                alt="Substack"
                loading="lazy"
                decoding="async"
                className="h-5"
                src="/substack.png"
              ></img>
              <span>動態</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
