'use client'

import { useEffect, useState } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { getDataFromSanity, updateViewCount } from "../../../sanity/sanity-utils";
import { Skeleton } from "../ui/skeleton";

export default function Footer() {

  const [viewCount, setViewCount] = useState(undefined);

  const updateCount = async (_id) => {
    const response = await updateViewCount(_id);
    setViewCount(response.viewCount);
  }

  useEffect(() => {
    const getViewCount = async () => {
      const data = await getDataFromSanity('views', false)
      if (data.length) {
        setViewCount(data[0].viewCount);
        if (!sessionStorage.getItem('visited')) {
         updateCount(data[0]._id);
         sessionStorage.setItem('visited', true);
        }
       }
     }
    getViewCount();
  }, [])


  const socialRedirect = (platform) => {
    if (platform === "linkedIn") {
      window.open("https://www.linkedin.com/in/vishnuSurendran7999", "_blank");
    } else if (platform === "instagram") {
      window.open("https://www.instagram.com/", "_blank");
    } else if (platform === "github") {
      window.open("https://www.github.com/Vishnuvich", "_blank");
    }
  };
  return (
    <>
      <footer className="flex flex-col justify-center items-center relative">
        <div className="flex items-center justify-center mb-5">
          <div className="px-10">
            <AiFillLinkedin
              onClick={() => socialRedirect("linkedIn")}
              className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer"
            />
          </div>
          <div className="px-10">
            <AiFillGithub
              onClick={() => socialRedirect("github")}
              className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer"
            />
          </div>
          <div className="px-10">
            <AiOutlineInstagram
              onClick={() => socialRedirect("instagram")}
              className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer"
            />
          </div>
        </div>
        {viewCount ? <p className="font-light text-slate-400 text-xs">
          {viewCount} Views 
        </p> : <Skeleton className="w-[60px] h-[16px] rounded-sm" />}
        <p className="italic font-light text-slate-400 text-xs">
          Designed & Developed by Vishnu Surendran
        </p>
      </footer>
    </>
  );
}
