import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SchoolIcon from "@/components/icon/SchoolIcon";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import WorkIcon from "@/components/icon/WorkIcon";
import ProjectIcon from "@/components/icon/ProjectIcon";
import { Separator } from "@/components/ui/separator";
import CertIcon from "@/components/icon/CertIcon";

export default function Timeline() {
  return (
    <div className="fullWidthPadding">
      <h1 className="px-4 pb-2 text-2xl md:text-5xl">Timeline.</h1>

      <div className="relative grid min-w-full w-full grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-4">
        {timelineList.map(
          ({ isDevelopmentRelated, ...data }, index, { length }) => (
            <React.Fragment key={`timeline-card-${index}`}>
              <div className="hidden md:flex flex-col items-center text-mute min-w-max leading-tight align-middle pt-5 pl-4">
                <span>{data.dateBegin}</span>
                {data.dateEnd && (
                  <>
                    <span> - </span>
                    <span>{data.dateEnd}</span>
                  </>
                )}
              </div>
              <div className="hidden relative items-start w-full pt-4 md:flex">
                <div
                  className={cn(
                    "w-8 h-8 p-2 rounded-2xl z-20 absolute left-0 top-4",
                    data.iconColor,
                    data.iconBgColor
                  )}
                >
                  {data.icon}
                </div>
                <div className="h-full w-8 translate-x-4 translate-y-4 pt-8 pb-4">
                  <i className="block bg-foreground h-full w-px opacity-50" />
                </div>
                <div className="w-12 translate-x-4 translate-y-4 pr-4">
                  <i className="block bg-foreground w-full h-px opacity-50" />
                </div>
              </div>
              <div>
                <TimelineCard {...data} />
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
}

interface TimelineCardProps {
  icon: JSX.Element;
  iconColor?: string;
  iconBgColor?: string;
  title: string;
  subtitle: string;
  dateBegin: string;
  dateEnd?: string;
  listItem?: string[];
  extendContent?: JSX.Element;
  hightlight?: string[];
}

function TimelineCard({
  icon,
  iconColor,
  iconBgColor,
  title,
  subtitle,
  dateBegin,
  dateEnd,
  listItem,
  extendContent,
  hightlight,
}: TimelineCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <div
          className={cn(
            "w-8 h-8 p-2 rounded-2xl z-20 absolute left-4 top-4 md:hidden",
            iconColor,
            iconBgColor
          )}
        >
          {icon}
        </div>
        <CardTitle className="pl-12 md:pl-0">{title}</CardTitle>
        <div className="flex flex-row flex-wrap pl-12 md:pl-0">
          <CardDescription>{subtitle}</CardDescription>
          <CardDescription className="ml-auto md:hidden">{`${dateBegin}${
            dateEnd ? ` - ${dateEnd}` : ""
          }`}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        {extendContent && (
          <div>
            {extendContent}
            <Separator className="my-2" />
          </div>
        )}
        <ul className="list-disc list-outside pl-6 text-muted-foreground">
          {listItem?.length &&
            listItem.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-row flex-wrap gap-2">
        {hightlight?.length &&
          hightlight.map((item) => (
            <Badge key={`${subtitle}-${item}`} variant="secondary">
              {item}
            </Badge>
          ))}
      </CardFooter>
    </Card>
  );
}

const timelineList: Array<TimelineCardProps & { isDevelopmentRelated?: true }> =
  [
    {
      isDevelopmentRelated: true,
      icon: <ProjectIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-purple-600",
      title: "Personal Project: Building a Portfolio Website",
      subtitle:
        "To deepen my proficiency in TailwindCSS and gain a comprehensive understanding of Next.js App Router features, including Route Groups, Parallel Routes, and Intercepting Routes",
      dateBegin: "September 2024",
      listItem: [
        "Implementing complex routes layouts and responsive design with TailwindCSS.",
        "Utilizing Route Groups to create a structured and maintainable routing system.",
        "Leveraging Parallel Routes to optimize page loading (not necessary but for practicing purpose).",
        "Implementing Intercepting Routes to handle introducing version 2 of my site.",
      ],
      extendContent: (
        <span className="block footerLinks text-right">
          You&apos;re at the live site now .
          <br />
          Visit source code on{" "}
          <a target="_blank" href="https://github.com/Lyle-Stack/lyleliao">
            Github
          </a>{" "}
          .
        </span>
      ),
      hightlight: [
        "Route Groups",
        "Parallel Routes",
        "Intercepting Routes",
        "Next.js",
        "TailwindCSS",
      ],
    },
    {
      isDevelopmentRelated: true,
      icon: <WorkIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-primary",
      title: "Full-stack Web Developer",
      subtitle: "Fenrir Data Analytics Ltd.",
      dateBegin: "May 2023",
      dateEnd: "May 2024",
      listItem: [
        "Designed and developed web products that focused on usability and user experience with an emphasis on data display.",
        "Leveraging responsive web frameworks to complete deliverables ahead of schedule.",
        "Research new technologies, identify and learn best practice, adapt quickly and provide technical guidance to other team members.",
        "Executed off-line trouble shooting with remote team members.",
        "Discussed and delivered requirements with clients in different areas of work.",
      ],
      extendContent: (
        <span className="block footerLinks text-right">
          Confidential Projects for the Ministry of Defence.
        </span>
      ),
      hightlight: [
        "JavaScript",
        "TailwindCSS",
        "HTML",
        "React",
        "Next.js",
        "Shadcn UI",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "Prisma ORM",
        "Docker",
        "Git",
      ],
    },
    {
      isDevelopmentRelated: true,
      icon: <ProjectIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-purple-600",
      title:
        "Independent Front-End Development Project - SPA for Gama Green Engergy",
      subtitle: "Gama Green Engergy",
      dateBegin: "July 2022",
      listItem: [
        "Established and maintained proactive communication with the client to gain a deep understanding of their page requirements. Collaborated on copywriting to ensure alignment between content and design vision.",
        "Defined clear design specifications based on client needs and content. Worked closely with the designer to seamlessly translate design mockups into a fully functional Single Page Application (SPA).",
        "Proficiently handled technical aspects such as domain registration and DNS configuration. Leveraged GitHub Pages for fast and reliable static page deployment.",
        "Successfully delivered an SPA in 3 weekend that exceeded client expectations. Achieved a 30% improvement in page load speed.",
      ],
      extendContent: (
        <span className="block footerLinks text-right">
          View live site at{" "}
          <a target="_blank" href="https://gama-green.tw/">
            gama-green.tw
          </a>{" "}
          .<br />
          Visit source code on{" "}
          <a
            target="_blank"
            href="https://github.com/liaochungyid/gama-green-energy"
          >
            Github
          </a>{" "}
          .
        </span>
      ),
      hightlight: [
        "client communication",
        "design collaboration",
        "performance optimization",
        "Single Page Application",
        "DNS setup",
        "GitHub Pages",
        "Next.js",
        "MUI",
      ],
    },
    {
      isDevelopmentRelated: true,
      icon: <WorkIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-primary",
      title: "Junior Consultant",
      subtitle: "Pinnovation PTE. Limited Taiwn Branch (Singapore)",
      dateBegin: "March 2022",
      dateEnd: "April 2023",
      listItem: [
        "Collaborated closely with Product, Site Merchandising, Design, and fellow engineers to develop and iterate on the responsive site experience.",
        "Managed Singpass authorization issues as well as user credential problem.",
        "Went production, maintained and in a total re-development of company's products.",
        "Optimize application for higher speed and lesser complexity.",
      ],
      extendContent: (
        <span className="block footerLinks text-right">
          View live site at{" "}
          <a target="_blank" href="https://iwills.sg/">
            iwills.sg
          </a>{" "}
          .
        </span>
      ),
      hightlight: [
        "JavaScript",
        "React.js/Redux-Saga",
        "Next.js",
        "NestJS",
        "TypeScript",
        "Ant design",
        "MUI",
        "styled-components",
        "PM2",
        "Git",
        "HTML/CSS/SCSS",
      ],
    },
    {
      isDevelopmentRelated: true,
      icon: <CertIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-sky-600",
      title: "Full Stack Web Development Program (Specialize in Back-end)",
      subtitle: "ALPHACamp",
      dateBegin: "Jan 2022",
      extendContent: (
        <span className="block footerLinks text-right">
          View certification on{" "}
          <a
            target="_blank"
            href="https://global.turingcerts.com/zh-TW/co/cert?hash=d8e5c68f34d6c0409524e05de2419295bcb29fe1c06e8bd0e135b9891d04a2fa"
          >
            Turing Certs
          </a>{" "}
          .
          <br />
          View final project on{" "}
          <a
            target="_blank"
            href="https://github.com/liaochungyid/twitter-fullstack-2020"
          >
            Github
          </a>{" "}
          .
        </span>
      ),
      hightlight: [
        "Node.js",
        "JavaScript",
        "Express.js",
        "RESTful API",
        "HTML/CSS/SCSS",
        "ORM",
        "Git",
      ],
    },
    {
      isDevelopmentRelated: true,
      icon: <CertIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-sky-600",
      title: "Deep Learning Specialization",
      subtitle: "DeepLearning.AI on coursera",
      dateBegin: "October 2019",
      extendContent: (
        <span className="block footerLinks text-right">
          View certification on{" "}
          <a
            target="_blank"
            href="https://coursera.org/share/4f369de606e24731031469e4337703e2"
          >
            coursera
          </a>{" "}
          .
        </span>
      ),
      hightlight: ["Python"],
    },
    {
      isDevelopmentRelated: true,
      icon: <SchoolIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-emerald-600",
      title: "Cranfield University",
      subtitle: "Pre-master's in Engineering",
      dateBegin: "September 2018",
      dateEnd: "June 2019",
      hightlight: ["Pre-master"],
    },
    {
      isDevelopmentRelated: true,
      icon: <SchoolIcon />,
      iconColor: "text-background",
      iconBgColor: "bg-emerald-600",
      title: "R.O.C. Naval Academy",
      subtitle: "Applied Science",
      dateBegin: "September 2009",
      dateEnd: "June 2013",
      hightlight: ["Bachelor of Science"],
    },
  ];
