"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineClose,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Sheet, SheetContent } from "../ui/sheet";
import { Separator } from "../ui/seperator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getDataFromSanity } from "../../../sanity/sanity-utils";
import { HeroData } from "../../utils/types";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../sanity/sanity-utils";

type Props = {
  headerData: HeroData
}

export default function Header({headerData}: Props) {
  const [darkMode, setDarkMode] = useState(true);
  const [hamMenu, setHamMenu] = useState(false);
  return (
    <>
      <header
        className={
          "py-5 fixed w-full z-20 shadow-xl" +
          (hamMenu ? " bg-primary" : " navbar-blur")
        }
      >
        <nav className="flex justify-between px-5">
          <Link href="/">
            <h1 className="text-base cursor-pointer text-slate-200 hover:text-teal-500 transition ease-in">
              Vishnu.dev
            </h1>
          </Link>
          <div className="flex">
            <ul className="hidden lg:flex items-center text-slate-200 text-sm tracking-widest">
              {/* <li className=' cursor-pointer text-2xl pr-2' onClick={() => setDarkMode(!darkMode)}> */}
              {/* <div className='p-2 hover:bg-neutral-700 hover:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-gray-900 transition ease-in rounded-xl'>
                      { darkMode ? <MdDarkMode/> : <MdLightMode/>}
                    </div> */}
              {/* </li> */}
              <li className="nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex">
                <ScrollLink
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={50}
                >
                  SKILLS
                </ScrollLink>
              </li>
              <li className="nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex">
                <ScrollLink
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-200}
                >
                  PROJECTS
                </ScrollLink>
              </li>
              <Link href="/blog">
                <li className="nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex">
                  BLOG
                </li>
              </Link>
              <li className="nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex">
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={50}
                >
                  CONTACT
                </ScrollLink>
              </li>
            </ul>
            <div
              className="text-slate-200 flex-col justify-center items-center cursor-pointer text-2xl flex lg:hidden"
              onClick={() => setHamMenu(!hamMenu)}
            >
              {!hamMenu && <GiHamburgerMenu />}
            </div>
          </div>
        </nav>
        {/* <AnimatePresence>
          {hamMenu && (
            <div className="overflow-hidden lg:hidden">
              <motion.div
                className="py-20 flex justify-between flex-col w-full h-screen bg-primary"
                initial="initial"
                animate="animate"
                variants={slideDown}
                exit={slideDown.exit}
              >
                <div className="pb-20">
                  <ul className="flex items-center text-center flex-col text-lg md:text-xl font-medium text-slate-200">
                    <li className="mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full">
                      <ScrollLink
                        className="w-full block"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={50}
                        onClick={() => setHamMenu(!hamMenu)}
                      >
                        Skills
                      </ScrollLink>
                    </li>
                    <li className="mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full">
                      <ScrollLink
                        className="w-full block"
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={50}
                        offset={-200}
                        onClick={() => setHamMenu(!hamMenu)}
                      >
                        Projects
                      </ScrollLink>
                    </li>
                    <li className="mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full">
                      <Link href="/blog">Blogs</Link>
                    </li>
                    <li className="mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full">
                      <ScrollLink
                        className="w-full block"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={50}
                        onClick={() => setHamMenu(!hamMenu)}
                      >
                        Contact
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="px-10">
                    <AiFillLinkedin className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer" />
                  </div>
                  <div className="px-10">
                    <AiFillGithub className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer" />
                  </div>
                  <div className="px-10">
                    <AiOutlineInstagram className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence> */}
        <HamburgerSlideMenu hamMenu={hamMenu} setHamMenu={setHamMenu} headerData={headerData} />
      </header>
    </>
  );
}

type HamProps = {
  hamMenu: any,
  setHamMenu: any,
  headerData: HeroData
}

export function HamburgerSlideMenu({hamMenu, setHamMenu, headerData}: HamProps) {  
  
  return (
    <>
      <Sheet open={hamMenu} onOpenChange={()=> setHamMenu(!hamMenu)} >
        <SheetContent className="font-roboto_mono text-slate-200 lg:hidden">
        <div className="overflow-hidden lg:hidden">
              <div className="flex flex-col justify-between w-full h-[94vh] bg-primary">
                <div className="flex flex-col">
                  <div className="flex flex-col p-5 text-sm">
                    <div className="flex items-center mb-4">
                      <Avatar>
                        <AvatarImage src={urlFor(headerData.avatarImage).url()}/>
                        <AvatarFallback>VS</AvatarFallback>
                      </Avatar>
                      <h3 className="ml-4 text-xl">Vishnu Surendran</h3>
                    </div>
                    <div>
                      <PortableText value={headerData.headerDescription}/> 
                    </div>
                    <Separator className="mt-5"/>
                  </div>
                  <div>
                    <ul className="flex items-center text-left flex-col p-5 text-base text-slate-200">
                      <li className="mx-auto py-5 cursor-pointer hover:text-teal-500 transition ease-in w-full">
                        <ScrollLink
                          className="w-full block"
                          activeClass="active"
                          to="skills"
                          spy={true}
                          smooth={true}
                          duration={50}
                          onClick={() => setHamMenu(!hamMenu)}
                        >
                          SKILLS
                        </ScrollLink>
                      </li>
                      <li className="mx-auto py-5 cursor-pointer hover:text-teal-500 transition ease-in w-full">
                        <ScrollLink
                          className="w-full block"
                          activeClass="active"
                          to="projects"
                          spy={true}
                          smooth={true}
                          duration={50}
                          offset={-200}
                          onClick={() => setHamMenu(!hamMenu)}
                        >
                          PROJECTS
                        </ScrollLink>
                      </li>
                      <li className="mx-auto py-5 cursor-pointer hover:text-teal-500 transition ease-in w-full">
                        <Link href="/blog">BLOG</Link>
                      </li>
                      <li className="mx-auto py-5 cursor-pointer hover:text-teal-500 transition ease-in w-full">
                        <ScrollLink
                          className="w-full block"
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          duration={50}
                          onClick={() => setHamMenu(!hamMenu)}
                        >
                          CONTACT
                        </ScrollLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-5">
                  <Separator className="mb-5"/>
                  <div className="mb-5 text-sm">Find me on</div>
                  <div className="flex items-center justify-between w-full px-5 sm:px-10">
                    <div className="">
                      <AiFillLinkedin className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer" />
                    </div>
                    <div className="">
                      <AiFillGithub className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer" />
                    </div>
                    <div className="">
                      <AiOutlineInstagram className="text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
