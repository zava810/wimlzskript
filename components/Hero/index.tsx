import {motion} from 'framer-motion'
import Router from 'next/router'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { fadeIn, fadeUp, slideFromLeft } from '../../utils/Animations'
import { BiChevronsDown } from 'react-icons/bi'

type Props = {}

function Hero({}: Props) {
    const [text] = useTypewriter({
        words: ["< I am Vishnu Surendran />", "< Front-end Web Developer />", "<Electronics Enthusiast/>"],
        loop: 0,
      })
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
        <motion.h4 variants={fadeIn} className='text-lg md:text-xl lg:text-xl '> <span className='text-teal-500'>Software Engineer</span> @ <a href="https://www.qburst.com" target="_blank" rel="noreferrer"><span className='text-red-700'>Q</span>Burst</a></motion.h4>
        {/* <p className=' text-teal-500 mb-3 text-sm md:text-base'>Front-end Developer | Electronics Enthusiast</p> */}
        <motion.p variants={fadeIn} className=' leading-6 md:leading-7 lg:leading-8 text-slate-400 text-sm md:text-base'>I am a front-end software engineer with more than 1 year of experience in creating 
          user-friendly and visually appealing web interfaces using technologies such as HTML, CSS, JavaScript 
          and frameworks such as Angular, React JS, and Next JS.</motion.p>
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