import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { fadeIn, slideDown, slideFromLeft } from '../../utils/Animations'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { getDataFromSanity } from '../../sanity/sanity-utils'
import { PortableText } from '@portabletext/react'

function Experience() {
  const [experienceData, setExperienceData] = useState(null);

  const getExperienceData =async () => {
    const data = await getDataFromSanity('Experience', false);
    if (data.length) {
      setExperienceData(data);
      console.log('Experience', data);
    }
  }

  useEffect(() => {
    getExperienceData();
  },[])

  return (
    <section className='flex flex-col py-10 px-5'>
    <motion.div className='flex flex-col justify-start' initial={'initial'} whileInView={'animate'} viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
      <motion.h2 variants={slideFromLeft} className='dark:text-slate-200 text-2xl mb-10'>Where I&apos;ve Worked</motion.h2>
      {experienceData && experienceData.length && experienceData?.map((data, i) => (
        <ExperienceDropDown key={i} experienceData={data}/>
      ))}
    </motion.div>
  </section>
  )
}

export default Experience


export interface Props {
  experienceData: {
    designation: string,
    company: string,
    start: string,
    end: string,
    present: boolean,
    location: string,
    description: any,
    skills: []
  }
}

export function ExperienceDropDown ({experienceData}: Props) {
  const [experienceOpen, setExperienceOpen] = useState(false)
  const startDate = new Date(experienceData?.start);
  const formattedStartDate = startDate.toLocaleString('default', {month: 'long', year: 'numeric'});
  const endDate = new Date(experienceData?.end);
  const formattedEndDate = endDate.toLocaleString('default', {month: 'long', year: 'numeric'});

  return (
    <>
       <motion.div variants={fadeIn} className='flex justify-between items-center shadow-2xl rounded-lg'>
        <div>
          <h4 className=' dark:text-slate-200 text-base md:text-lg'>{experienceData?.designation} @ {experienceData?.company}</h4>
          <p className='text-slate-400 italic text-xs md:text-sm pt-2 mb-3'>{`${formattedStartDate} - ${experienceData.present ? 'Present' : formattedEndDate}`}</p>
        </div>
        <div className=' dark:text-slate-200 mr-2' onClick={() => setExperienceOpen(!experienceOpen)}>
          {experienceOpen ? <AiOutlineMinus/>  : <AiOutlinePlus/>}
        </div>
      </motion.div>
      <AnimatePresence>
        {experienceOpen && 
          <div className='overflow-hidden'>
            <motion.div className='rounded-xl p-2 dark:bg-slate-800 bg-[#E5E7E9] flex flex-col' initial={'initial'} animate={'animate'} variants={slideDown} exit={slideDown.exit}>
              <div className='flex items-center dark: text-slate-400 my-2'>
                <span className='px-2 text-teal-500'><MdLocationOn/></span>
                <p className=' text-xs'>{experienceData.location}</p>
              </div>
              <div className='flex px-2 dark:text-slate-400 leading-6 md:leading-7 lg:leading-8 text-sm md:text-base'>
                <PortableText value={experienceData?.description}/>
              </div>
              <div className='flex justify-center py-3 leading-6 md:leading-7 lg:leading-8 text-xs md:text-sm'>
                <ul className='flex items-center justify-start w-full'>
                  {experienceData?.skills?.map((skill, j) => (
                    <li key={j} className='px-4 py-1 mx-2 rounded-3xl dark:bg-neutral-900 bg-[#2A3A45] text-teal-400'>{skill}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        }
        </AnimatePresence>
    </>
  );
}
