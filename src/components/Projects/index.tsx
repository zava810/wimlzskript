'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { fadeUp, slideFromLeft } from '../../utils/Animations'
import { ProjectData } from '../../utils/types';
import Link from 'next/link';

type Props = {
  data: ProjectData[]
};

function Projects({data}: Props) {
  
  return (
    <motion.section className='flex flex-col py-10 px-5' initial={'initial'} whileInView={'animate'} viewport={{once: true, amount: 0.3}} transition={{staggerChildren: 0.2}}>
    <div className='flex'>
      <motion.h2 variants={slideFromLeft} className=' dark:text-slate-200 text-2xl mb-10' id='projects'>Things I&apos;ve Built</motion.h2>
    </div>
    <motion.div className='flex flex-wrap py-3 px-0 gap-6'>
      {data?.map((project) => {
        return (
        <motion.div variants={fadeUp} key={project._id} className=' custom-shadow rounded-xl project-tile flex flex-col items-center text-slate-200 w-full box-border overflow-hidden bg-lightNavy min-w-[20rem] max-w-[22rem] sm:w-1/2 md:w-1/3 '>
          <div className=' overflow-hidden'>
          <Image src={project.image.asset?.url} alt="instagramClone" width={400} height={400} className='project-img'/>
          </div>
          <div className='flex flex-col w-full justify-start py-4 px-6'>
            <h4 className='py-1 leading-6 md:leading-7 lg:leading-8 text-base md:text-lg'>{project.name}</h4>
            <p className='subtext text-slate-400 text-xs md:text-sm'>{project.category}</p>
            <p className='subtext-open text-secondary text-xs md:text-sm flex items-center cursor-pointer'>
            <Link key={project.slug.current} href={`/project/${project.slug.current}`}> 
              <span className='mr-2'>View project</span>
            </Link>
              <HiOutlineArrowNarrowRight/>
            </p>
          </div>
        </motion.div>
        )
      })}
    </motion.div>
  </motion.section>
  )
}

export default Projects