import {motion} from 'framer-motion'
import Router from 'next/router'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { fadeIn, fadeUp, slideFromLeft } from '../../utils/Animations'
import { BiChevronsDown } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { getDataFromSanity } from '../../sanity/sanity-utils'
import {PortableText} from '@portabletext/react'

type Props = {}

function Hero({}: Props) {
    const [text] = useTypewriter({
        words: ["< I am Vishnu Surendran />", "< Front-end Web Developer />", "< Electronics Enthusiast />"],
        loop: 0,
      })
      const [heroData, setHeroData] = useState(null);
    const getHeroData = async () => {
      const data = await getDataFromSanity('Hero', false);
      if (data.length) {
        setHeroData(data[0]);
        console.log(data);
      }
    }
    
    useEffect(() => {
      getHeroData();
    }, [])
    
  return (
    <motion.section className='py-5 flex flex-col px-5 justify-center min-h-screen' initial={'initial'} animate={'animate'} transition={{staggerChildren: 0.2}}>
    <div className='flex flex-col justify-center h-[80vh]'>
      <div className='mt-10 mb-8 dark:text-slate-200 leading-9'>
        {/* <h1 className='text-5xl font-medium pb-2'><span className='text-hover'>H</span><span className='text-hover'>i</span><span className='text-hover'>,</span></h1> */}
        <motion.h6 variants={slideFromLeft} className='text-teal-500 mb-4 text-sm md:text-base font-roboto_mono'>Hey there, <span className='text-xl md:text-2xl hand-wave'>\uD83D\uDC4B\uD83C\uDFFB</span></motion.h6>
        <motion.div variants={fadeIn} className='overflow-hidden'>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight font-roboto-mono mb-3'>
            <span>{text}</span>
            <Cursor cursorColor='#14B8A6'/>
          </h3>
        </motion.div>
        <motion.h4 variants={fadeIn} className='text-lg md:text-xl lg:text-xl flex'>
          <span className='text-teal-500 pr-2'>{heroData?.destination}</span> @ 
          <a href={heroData?.companyUrl} target="_blank" rel="noreferrer">
            <p className='company-name pl-2'>
              {heroData?.organization}
            </p>
          </a>
        </motion.h4>
        {/* <p className=' text-teal-500 mb-3 text-sm md:text-base'>Front-end Developer | Electronics Enthusiast</p> */}
        <motion.div variants={fadeIn} className=' leading-6 md:leading-7 lg:leading-8 text-slate-400 text-sm md:text-base'>
          <PortableText value={heroData?.content}/>
          </motion.div>
      </div>
      <motion.div variants={fadeIn} className='flex items-center justify-start '>
        <button className='px-8 py-3 text-slate-200 hover:bg-teal-600 border-2 border-teal-400 rounded-3xl transition ease-in text-sm md:text-base'
        onClick={() => Router.push('/resume')}>
          Get My Resume
        </button>
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

export default Hero