import Head from 'next/head'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BiChevronsDown } from 'react-icons/bi'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import Router from 'next/router'
import Image from 'next/image';
import InstagramClone from '../public/Instagram-Clone.png';
import Layout from './layout'


export default function Home({darkMode}) {
  const [experienceOpen, setExperienceOpen] = useState(false)
  // const [darkMode, setDarkMode] = useState(true)
  const expRef  = useRef(null);
  const name = "Vishnu Surendran";

  const socialRedirect = (platform) => {
    if (platform === 'linkedIn') {
      window.open("https://www.linkedin.com/in/vishnuSurendran7999", "_blank");
    } else if (platform === 'instagram') {
      window.open("https://www.instagram.com/", "_blank");       
    } else if (platform === "github") {
      window.open("https://www.github.com/Vishnuvich", "_blank");
    }
  }

  const sendMail = () => {
    window.location.href = "mailto:vishnuksvichu12345@gmail.com"
  }
  return (
    <div className="dark">
      <Head>
        <title>Vishnu Surendran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Layout>
          <div className='lg:px-16 lg:mx-auto lg:max-w-5xl'>
            <section className='py-5 flex flex-col px-5 justify-center min-h-screen'>
              <div className='flex flex-col justify-center h-[80vh]'>
                <div className='mt-10 mb-8 dark:text-slate-200 leading-9'>
                  {/* <h1 className='text-5xl font-medium pb-2'><span className='text-hover'>H</span><span className='text-hover'>i</span><span className='text-hover'>,</span></h1> */}
                  <h6 className='text-teal-500 mb-4 text-lg font-roboto_mono'>Hi, my name is,</h6>
                  <h3 className='text-5xl font-medium font-roboto'>
                  {name.split('').map((letter) => {
                    return (
                    <span className='text-hover cursor-pointer' key={letter}>{letter}</span>
                    )}
                    )}
                  </h3>
                  <h4 className='text-2xl'>Software Engineer @ <a href="https://www.qburst.com" target="_blank" rel="noreferrer"><span className='text-red-700'>Q</span>Burst</a></h4>
                  <p className=' text-stone-600'>Front-end Developer | Electronics Enthusiast</p>
                  <p className=' leading-8'>I am a front-end software engineer with 1 year of experience in creating 
                    user-friendly and visually appealing web interfaces using technologies such as HTML, CSS, JavaScript 
                    and frameworks such as React, Angular.</p>
                </div>
                <div className='flex items-center justify-start '>
                  <button className='px-8 py-3 dark:text-slate-200 hover:bg-teal-500 border-2 border-teal-500 rounded-3xl transition ease-in'
                  onClick={() => Router.push('/about')}>
                    Get My Resume
                  </button>
                </div>
              </div>
              <div className=' text-slate-200 flex justify-center items-center w-full h-[20vh]'>
                <div className='flex flex-col items-center'>
                  <span className=' text-xs scroll-bounce '>Scroll Down</span>
                  <span><BiChevronsDown/></span>
                </div>
              </div>
            </section>
            {/* About Section */}
            <section className='flex flex-col py-10 px-5'>
              <div className='flex flex-col justify-start'>
                <h2 className=' dark:text-slate-200 text-2xl pb-10'>About Me</h2>
                <p className='dark:text-slate-400 leading-7'>Hello! My name is Vishnu and I&apos;m passionate about creating visually stunning and user-friendly web interfaces.
                  I have a strong background in front-end technologies such as HTML, CSS, JavaScript, and experience with popular front-end frameworks and libraries
                  such as React, Angular. I am skilled in creating responsive, mobile-friendly websites.
                  I have experience in multiple project and industries, from simple landing pages to complex web applications. 
                  I am always up for new challenges and love to stay updated with new technologies and trends in the industry.
                  Currently I&apos;m working as Software Engineer at QBurst Technologies.
                </p>
                <p className='dark:text-slate-400 py-4'>Here are few technologies I&apos;ve been working with recently:</p>
                <div className='flex justify-start dark:text-slate-400 leading-9 px-5'>
                  <ul className='pr-10 list-circle'>
                    <li className='text-teal-500'> <span className='text-slate-400'>JavaScript</span></li>
                    <li className='text-teal-500'><span className='text-slate-400'>Angular</span></li>
                    <li className='text-teal-500'> <span className='text-slate-400'>TypeScript</span></li>
                  </ul>
                  <ul className='list-circle'>
                    <li className='text-teal-500'> <span className='text-slate-400'>Next.js</span></li>
                    <li className='text-teal-500'><span className='text-slate-400'>Tailwind</span></li>
                    <li className='text-teal-500'><span className='text-slate-400'>ReactJS</span></li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Experience Section */}
            <section className='flex flex-col py-10 px-5'>
              <div className='flex flex-col justify-start'>
                <h2 className='dark:text-slate-200 text-2xl pb-5'>Where I&apos;ve Worked</h2>
                <div className='flex justify-between items-center'>
                  <div>
                    <h4 className=' dark:text-slate-200 text-lg'>Software Engineer @ <a href="https://www.qburst.com"><span className=' text-red-600'>Q</span>Burst</a></h4>
                    <p className='text-slate-400 italic text-sm pt-2 mb-3'>August 2021 - Present</p>
                  </div>
                  <div className=' dark:text-slate-200' onClick={() => setExperienceOpen(!experienceOpen)}>
                    {experienceOpen ? <AiOutlineMinus/>  : <AiOutlinePlus/>}
                  </div>
                </div>
                <CSSTransition nodeRef={expRef} in={experienceOpen} timeout={500} unmountOnExit classNames='experience'>
                  <div ref={expRef} className='rounded-xl p-2 dark:bg-slate-800 bg-[#E5E7E9] flex flex-col'>
                    <div className='flex items-center dark: text-slate-400 my-2'>
                      <span className='px-2 text-teal-500'><MdLocationOn/></span>
                      <p className=' text-sm'>Kochi, Kerala</p>
                    </div>
                    <div className='flex px-2 dark:text-slate-400'>
                      <p>Developing front-end application solutions using Angular framework</p>
                    </div>
                    <div className='flex justify-center py-3'>
                      <ul className='flex items-center text-sm justify-around w-full'>
                        <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>JavaScript</li>
                        <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>Angular</li>
                        <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>HTML</li>
                        <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>CSS</li>
                      </ul>
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </section>
            {/* Projects */}
            <section className='flex flex-col py-5 px-5'>
              <div className='flex'>
                <h2 className=' dark:text-slate-200 text-2xl pb-5'>Things I&apos;ve Built</h2>
              </div>
              <div className='flex flex-wrap py-3'>
                <div className='rounded-xl project-tile flex flex-col items-center dark:text-slate-200 w-full overflow-hidden dark:bg-slate-800 sm:w-1/3'>
                  <div className=' overflow-hidden'>
                  <Image src={InstagramClone} alt="instagramClone" width={600}  height={600}  className='project-img'/>
                  </div>
                  <div className='flex flex-col w-full justify-start py-4 px-10'>
                    <h4 className='py-1 text-xl'>Instagram Clone Web App</h4>
                    <p className='subtext text-slate-400 text-sm'>Web Development</p>
                    <p className='subtext-open text-teal-400 text-sm flex items-center cursor-pointer font-medium'>
                      <span className='mr-2'>View project</span>
                      <HiOutlineArrowNarrowRight/>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Get in touch */}
            <section className='flex flex-col px-5 py-5 mb-10'>
              <div className='flex flex-col justify-center'>
                <h2 className='dark:text-slate-200 text-2xl mb-4'>Get In Touch</h2>
                <p className=' text-slate-400 mb-5'>Thank you for visiting my portfolio website. Although I’m not currently looking for any new opportunities, my inbox is always open. 
                  Whether you have a question or just want to say hi, I’ll try my best to get back to you!. Alternatively, you can also find me on LinkedIn. 
                  Feel free to connect with me and view my professional profile for more information about my background and experience.
                </p>
                <div className='flex items-center justify-start'>
                  <button className='px-8 py-3 dark:text-slate-200 hover:bg-teal-500 border-2 border-teal-500 rounded-3xl transition ease-in' onClick={() => sendMail()}>Contact Me</button>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </div>
    </div>
  )
}
