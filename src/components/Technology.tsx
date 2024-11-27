"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/ThreeDCardUi";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Technology() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-10 sm:w-[30rem] h-10 rounded-xl p-2 border  ">
       
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="/next.svg"
            height="1000"
            width="1000"
            className="h-8 w-8 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-3">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-1 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
         
        </div>
      </CardBody>
    </CardContainer>
  );
}
