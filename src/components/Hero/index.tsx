'use client'

import {motion} from 'framer-motion'
import Router from 'next/navigation'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { fadeIn, fadeUp, slideFromLeft } from '../../utils/Animations'
import { BiChevronsDown } from 'react-icons/bi'
import {PortableText} from '@portabletext/react'
import { HeroData } from '../../utils/types'
import { Button } from '../ui/button'

type Props = {
  data: HeroData
}

function Hero({data}: Props) {
    const [text] = useTypewriter({
        words: ["<Front-end Web Developer/>", "<Electronics Enthusiast/>"],
        loop: 0,
      })
    
  return (
    <motion.section className='flex flex-col px-5 justify-center' initial={'initial'} animate={'animate'} transition={{staggerChildren: 0.2}}>
    <div className='flex flex-col justify-center h-[80vh]'>
      <div className='mt-10 mb-8 dark:text-slate-200 leading-9'>
        {/* <h1 className='text-5xl font-medium pb-2'><span className='text-hover'>H</span><span className='text-hover'>i</span><span className='text-hover'>,</span></h1> */}
        <motion.h6 variants={slideFromLeft} className='text-secondary mb-4 text-sm lg:text-base font-roboto_mono'>Hey there, <span className='text-xl md:text-2xl hand-wave'>\uD83D\uDC4B\uD83C\uDFFB</span></motion.h6>
        <motion.h3 variants={slideFromLeft} className='text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight font-roboto-mono mb-6 whitespace-nowrap'>
        I&apos;m 
          <span className='text-secondary ml-6'>
            Vishnu Surendran
          </span>  
        </motion.h3>
        <motion.div variants={fadeIn} className='overflow-hidden'>
          <h4 className='text-lg md:text-2xl lg:text-3xl font-medium tracking-tight font-roboto-mono mb-6 whitespace-nowrap'>
            <span>{text}</span>
            <Cursor cursorColor='#14B8A6'/>
          </h4>
        </motion.div>
        <motion.h4 variants={fadeIn} className='text-md md:text-xl lg:text-xl flex'>
          <span className='text-secondary pr-2 whitespace-nowrap'>{data?.designation}</span> @ 
          <a href={data?.companyUrl} target="_blank" rel="noreferrer">
            <p className='company-name pl-2 whitespace-nowrap'>
              {data?.organization}
            </p>
          </a>
        </motion.h4>
        {/* <p className=' text-secondary mb-3 text-sm lg:text-base'>Front-end Developer | Electronics Enthusiast</p> */}
        <motion.div variants={fadeIn} className=' leading-6 md:leading-7 lg:leading-8 text-slate-400 text-sm lg:text-base'>
          <PortableText value={data?.content}/>
          </motion.div>
      </div>
      <motion.div variants={fadeIn} className='flex items-center justify-start '>
        <Button variant='secondary' className='text-slate-400 '>
          Get My Resume
        </Button>
      </motion.div>
    </div>
    <div className=' text-slate-200 flex justify-center items-center w-full h-[20vh]'>
      <motion.div variants={fadeUp} className='flex flex-col items-center'>
        <span className='text-xs scroll-bounce '>Scroll Down</span>
        <span><BiChevronsDown/></span>
      </motion.div>
    </div>
  </motion.section>
  )
}

export default Hero;
