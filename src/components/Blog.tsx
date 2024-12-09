// import { cn } from "@/lib/utils";
import React from "react";
// import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
} from "@tabler/icons-react";
import Link from "next/link";
import { BentoGrid, BentoGridItemUi,  } from "./ui/BentoGrid";

export function Blog() {
  return (
   <div>
      <h1 className="heading">Blogs</h1>
     <BentoGrid >
      {items.map((item, i) => (
        <BentoGridItemUi
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          btn={item.btn}
          // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          className={" flex flex-col"}
        />
      ))}
    </BentoGrid>
   </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    // header: <Skeleton />,
    header: <img src={"/next.svg"} alt="icon5"className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    btn: <Link href="go to zillur pc"><button className="text-neutral-600 dark:text-neutral-200 px-2  border-2 rounded-md">read more</button></Link>
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    // header: <Skeleton />,
    header: <img src={"/next.svg"} alt="icon5"className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    // header: <Skeleton />,
    header: <img src={"/next.svg"} alt="icon5"className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    // header: <Skeleton />,
    header: <img src={"/next.svg"} alt="icon5"className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
