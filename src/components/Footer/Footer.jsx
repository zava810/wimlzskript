'use client'

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer() {
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
        <p className="italic font-light text-slate-400 text-xs">
          Designed & Developed by Vishnu Surendran
        </p>
      </footer>
    </>
  );
}
