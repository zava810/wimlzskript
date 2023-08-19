"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../../utils/Animations";
import { MdLocationOn } from "react-icons/md";
import { PortableText } from "@portabletext/react";
import { ExperienceData } from "../../utils/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {
  data: ExperienceData[];
};

function Experience({ data }: Props) {
  return (
    <section className="flex flex-col py-10 px-5">
      <motion.div
        className="flex flex-col justify-start"
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          variants={slideFromLeft}
          className="dark:text-slate-200 text-2xl mb-10"
        >
          Where I&apos;ve Worked
        </motion.h2>
        {data &&
          data.length &&
          data?.map((item, i) => (
            <ExperienceDropDown key={i} experienceData={item} />
          ))}
      </motion.div>
    </section>
  );
}

export default Experience;

export function ExperienceDropDown({ experienceData }) {
  const startDate = new Date(experienceData?.start);
  const formattedStartDate = startDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const endDate = new Date(experienceData?.end);
  const formattedEndDate = endDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div  variants={slideFromRight}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-col items-start font-roboto_mono text-slate-200">
              <h4 className=" dark:text-slate-200 text-base text-left md:text-lg">
                {experienceData?.designation} @ {experienceData?.company}
              </h4>
              <p className="text-slate-400 italic text-xs md:text-sm pt-2 mb-3">{`${formattedStartDate} - ${
                experienceData.present ? "Present" : formattedEndDate
              }`}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-hidden">
              <div className="rounded-xl p-2 dark:bg-slate-800 bg-[#E5E7E9] flex flex-col">
                <div className="flex items-center dark: text-slate-400 my-2">
                  <span className="px-2 text-teal-500">
                    <MdLocationOn />
                  </span>
                  <p className=" text-xs">{experienceData.location}</p>
                </div>
                <div className="flex px-2 dark:text-slate-400 leading-6 md:leading-7 lg:leading-8 text-sm lg:text-base">
                  <PortableText value={experienceData?.description} />
                </div>
                <div className="flex justify-center py-3 leading-6 md:leading-7 lg:leading-8 text-xs md:text-sm">
                  <ul className="flex items-center justify-start w-full overflow-auto no-scrollbar">
                    {experienceData?.skills?.map((skill, j) => (
                      <li
                        key={j}
                        className="px-4 py-1 mx-2 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-secondary whitespace-nowrap"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}
