import { MdDarkMode, MdLightMode } from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose, AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { slideDown } from '../../utils/Animations';
import { Link as ScrollLink } from 'react-scroll'


export default function Header ({darkMode, setDarkMode}) {
    // const [darkMode, setDarkMode] = useState(true)
    const [hamMenu, setHamMenu] = useState(false);
    return (
        <>
        <div className={'py-5 fixed w-full z-20 shadow-xl' + (hamMenu ? ' bg-primary' : ' navbar-blur')}>
          <nav className='flex justify-between px-5'>
            <Link href='/'> 
              <h1 className='text-xl md:text-xl lg:text-xl cursor-pointer text-slate-200 hover:text-teal-500 transition ease-in'>Vishnu.dev</h1>
            </Link>
            <div className='flex'>
                <ul className='hidden lg:flex items-center dark:text-slate-200'>
                  <li className=' cursor-pointer text-2xl pr-2' onClick={() => setDarkMode(!darkMode)}>
                    {/* <div className='p-2 hover:bg-neutral-700 hover:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-gray-900 transition ease-in rounded-xl'>
                      { darkMode ? <MdDarkMode/> : <MdLightMode/>}
                    </div> */}
                  </li>
                  <Link href='/'>
                    <li className='nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex'>Home</li>
                  </Link>
                  <li className='nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex'>Blog</li>
                  <li className='nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex'>Skills</li>
                  
                    <li className='nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex'>
                      <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={50}>
                        Contact
                      </ScrollLink>
                    </li>
                </ul>
                <div className='dark:text-slate-200 flex-col justify-center items-center cursor-pointer text-2xl flex lg:hidden' 
                  onClick={() => setHamMenu(!hamMenu)}> 
                  {hamMenu ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                </div>
            </div>
          </nav>
          <AnimatePresence>
            { hamMenu &&
              (<div className='overflow-hidden lg:hidden'>
              <motion.div className='py-20 flex justify-between flex-col w-full h-screen bg-primary' initial='initial' animate='animate' variants={slideDown} exit={slideDown.exit}>
                <div className='pb-20'>
                  <ul className='flex items-center text-center flex-col text-lg md:text-xl font-medium text-black dark:text-slate-200'>
                    <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full' onClick={() => setHamMenu(!hamMenu)}>Home</li>
                    <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full' onClick={() => setHamMenu(!hamMenu)}>Blog</li>
                    <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full' onClick={() => setHamMenu(!hamMenu)}>Skills</li>
                    <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b border-teal-500 w-full'>
                      <ScrollLink className='w-full block' activeClass="active" to="contact" spy={true} smooth={true} duration={50} onClick={() => setHamMenu(!hamMenu)}>
                        Contact
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
                  <div className='flex items-center justify-center'>
                    <div className='px-10'>
                      <AiFillLinkedin className='text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer'/>
                    </div>
                    <div className='px-10'>
                      <AiFillGithub className='text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer'/>
                    </div>
                    <div className='px-10'>
                      <AiOutlineInstagram className='text-slate-200 hover:text-teal-500 transition ease-in-out text-xl cursor-pointer'/>
                    </div>
                  </div>
                </motion.div>
              </div>)
              }
          </AnimatePresence>
        </div>
        </>
    )
}