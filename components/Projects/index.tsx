import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { fadeUp, slideFromLeft } from '../../utils/Animations'
import InstagramClone from '../../public/Instagram-Clone.png';

type Props = {};

type Project = {
  id: number,
  title: string,
  subtitle: string,
  image: StaticImageData
}

function Projects({}: Props) {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Instagram Clone Web App',
      subtitle: 'Web Development',
      image: InstagramClone
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      subtitle: 'Web Development',
      image: InstagramClone
    },
    {
      id: 3,
      title: 'Instagram Clone Web App',
      subtitle: 'Web Development',
      image: InstagramClone
    }
  ]
  return (
    <motion.section className='flex flex-col py-10 px-5' initial={'initial'} whileInView={'animate'} viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
    <div className='flex'>
      <motion.h2 variants={slideFromLeft} className=' dark:text-slate-200 text-2xl mb-10' id='projects'>Things I&apos;ve Built</motion.h2>
    </div>
    <motion.div className='flex flex-wrap py-3 px-0 gap-6'>
      {projects.map((project) => {
        return (
        <motion.div variants={fadeUp} key={project.id} className='rounded-xl project-tile flex flex-col items-center dark:text-slate-200 w-full box-border overflow-hidden dark:bg-slate-800 max-w-[22rem] sm:w-1/2 md:w-1/3 '>
          <div className=' overflow-hidden'>
          <Image src={InstagramClone} alt="instagramClone" width={600}  height={600}  className='project-img'/>
          </div>
          <div className='flex flex-col w-full justify-start py-4 px-6'>
            <h4 className='py-1 leading-6 md:leading-7 lg:leading-8 text-base md:text-lg'>{project.title}</h4>
            <p className='subtext text-slate-400 text-xs md:text-sm'>{project.subtitle}</p>
            <p className='subtext-open text-teal-400 text-xs md:text-sm flex items-center cursor-pointer'>
              <span className='mr-2'>View project</span>
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