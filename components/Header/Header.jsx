import { MdDarkMode, MdLightMode } from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose, AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group';
import { useRef, useState } from 'react'
import Link from 'next/link';


export default function Header ({darkMode, setDarkMode}) {
    // const [darkMode, setDarkMode] = useState(true)
    const [hamMenu, setHamMenu] = useState(false);
    const nodeRef = useRef(null);
    return (
        <>
        <div className='navbar flex justify-between px-5 py-5 fixed w-full'>
          <Link href='/'> 
            <h1 className='text-4xl cursor-pointer dark:text-slate-200'>Vishnu</h1>
          </Link>
            <div className='flex'>
                <ul className='flex items-center dark:text-slate-200'>
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
                  <Link href='#contact'>
                    <li className='nav-items mx-10 cursor-pointer hover:text-teal-500 transition ease-in hidden lg:flex'>Contact</li>
                  </Link>
                </ul>
                <div className='dark:text-slate-200 flex-col justify-center items-center cursor-pointer text-2xl flex lg:hidden' 
                  onClick={() => setHamMenu(!hamMenu)}> 
                  {hamMenu ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                </div>
            </div>
          </div>
          { 
          <CSSTransition nodeRef={nodeRef} in={hamMenu} timeout={500} unmountOnExit classNames='hamMenu'>
            <div ref={nodeRef} className='py-20 flex justify-between flex-col'>
              <div className='pb-20'>
                <ul className='flex items-center text-center flex-col text-xl font-medium text-black dark:text-slate-200'>
                  <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b w-full'>Home</li>
                  <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b w-full'>Blog</li>
                  <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b w-full'>Skills</li>
                  <li className='mx-auto py-10 cursor-pointer hover:text-teal-500 transition ease-in border-b w-full'>Contact</li>
                </ul>
              </div>
                <div className='flex items-center justify-center'>
                  <div className='px-10'>
                    <AiFillLinkedin className='text-black dark:text-slate-200 text-xl cursor-pointer'/>
                  </div>
                  <div className='px-10'>
                    <AiFillGithub className='text-black dark:text-slate-200 text-xl cursor-pointer'/>
                  </div>
                  <div className='px-10'>
                    <AiOutlineInstagram className='text-black dark:text-slate-200 text-xl cursor-pointer'/>
                  </div>
                </div>
              </div>
            </CSSTransition>
            }
        </>
    )
}