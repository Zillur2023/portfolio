import React from "react";
import { FloatingDockUi } from "./ui/FloatingDockUi";

export type TItem = {
    title?: string;
    icon: React.ReactNode;
    href?: string; 
  };

export function FloatingDock({icon}:{icon: React.ReactNode;}) {
  const Items: TItem[]  = [
    {
      title: "NEST JS NEXT",
    //   icon: (
    //     <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    icon: icon,
      href: "/go to college",
    },


  ];
  return (
    // <div className="flex items-center justify-center h-[35rem] w-full">
    <div className="flex items-center justify-center ">
      <FloatingDockUi
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={Items}
      />
    </div>
  );
}
