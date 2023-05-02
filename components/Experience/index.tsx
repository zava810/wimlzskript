import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { fadeIn, slideDown, slideFromLeft } from '../../utils/Animations'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function Experience() {
  const [experienceOpen, setExperienceOpen] = useState(false)
  return (
    <section className='flex flex-col py-10 px-5'>
    <motion.div className='flex flex-col justify-start' initial={'initial'} whileInView={'animate'} viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
      <motion.h2 variants={slideFromLeft} className='dark:text-slate-200 text-2xl mb-10'>Where I&apos;ve Worked</motion.h2>
      <motion.div variants={fadeIn} className='flex justify-between items-center'>
        <div>
          <h4 className=' dark:text-slate-200 text-base md:text-lg'>Software Engineer @ <a href="https://www.qburst.com"><span className=' text-red-600'>Q</span>Burst</a></h4>
          <p className='text-slate-400 italic text-xs md:text-sm pt-2 mb-3'>August 2021 - Present</p>
        </div>
        <div className=' dark:text-slate-200' onClick={() => setExperienceOpen(!experienceOpen)}>
          {experienceOpen ? <AiOutlineMinus/>  : <AiOutlinePlus/>}
        </div>
      </motion.div>
      <AnimatePresence>
        {experienceOpen && 
          <div className='overflow-hidden'>
            <motion.div className='rounded-xl p-2 dark:bg-slate-800 bg-[#E5E7E9] flex flex-col' initial={'initial'} animate={'animate'} variants={slideDown} exit={slideDown.exit}>
              <div className='flex items-center dark: text-slate-400 my-2'>
                <span className='px-2 text-teal-500'><MdLocationOn/></span>
                <p className=' text-xs'>Kochi, Kerala</p>
              </div>
              <div className='flex px-2 dark:text-slate-400 leading-6 md:leading-7 lg:leading-8 text-sm md:text-base'>
                <p>Developing front-end application solutions using Angular framework</p>
              </div>
              <div className='flex justify-center py-3 leading-6 md:leading-7 lg:leading-8 text-xs md:text-sm'>
                <ul className='flex items-center justify-around w-full'>
                  <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>JavaScript</li>
                  <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>Angular</li>
                  <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>HTML</li>
                  <li className='px-4 py-1 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>CSS</li>
                </ul>
              </div>
            </motion.div>
          </div>
        }
        </AnimatePresence>
    </motion.div>
  </section>
  )
}

export default Experience