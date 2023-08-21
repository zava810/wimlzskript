'use client'

import {motion} from 'framer-motion'
import { slideFromLeft, slideFromRight } from '../../utils/Animations'
import {PortableText} from '@portabletext/react'
import { AboutData } from '../../utils/types';

type Props = {
  data: AboutData
}

function About({data}: Props) {

  
  return (
    <section className='flex flex-col py-10 px-5'>
    <motion.div className='flex flex-col justify-start leading-6 md:leading-7 lg:leading-8 text-sm lg:text-base' initial={'initial'} whileInView={'animate'}        viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
      <motion.h2 variants={slideFromLeft} className=' dark:text-slate-200 text-2xl mb-10' id='skills'>About Me</motion.h2>
      <motion.div variants={slideFromRight} className='dark:text-slate-400 '>
        <PortableText value={data?.aboutContent}/>
      </motion.div>
      <motion.p variants={slideFromRight} className='dark:text-slate-400 py-4' id='skills'>
        Here are few technologies I&apos;ve been working with recently:
      </motion.p>
      <motion.div className='grid grid-cols-2 sm:grid-cols-3 justify-start dark:text-slate-400 leading-9 sm:w-3/4 md:w-3/5'>
        {
          data.skills.map((skill, i) => (
            <motion.li variants={slideFromRight} className='list-circle text-secondary' key={i}>
              <span className='text-slate-400'>
                {skill}  
              </span>
            </motion.li>
          ))
        }
        </motion.div>
    </motion.div>
  </section>
  )
}

export default About