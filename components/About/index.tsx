import {motion} from 'framer-motion'
import { slideFromLeft, slideFromRight } from '../../utils/Animations'
import { useEffect, useState } from 'react'
import { getDataFromSanity } from '../../sanity/sanity-utils';
import {PortableText} from '@portabletext/react'

type Props = {}

function About({}: Props) {
  const [aboutData, setAboutData] = useState(null);
  const [skillsArr, setSkillsArr] = useState(null);
  const getAboutData = async () => {
    const data = await getDataFromSanity('About', false);
    if (data.length) {
      setAboutData(data[0]);
      console.log(data);

      const skillsArr = data[0].skills?.reduce((acc, curr, i) => {
        if (!(i%3)) {
          acc.push(data[0].skills.slice(i, i+3));
        }
        return acc;
      }, []);
      setSkillsArr(skillsArr);
      console.log(skillsArr);
    }
  }

  useEffect(() => {
    getAboutData();
  },[])

  return (
    <section className='flex flex-col py-10 px-5'>
    <motion.div className='flex flex-col justify-start leading-6 md:leading-7 lg:leading-8 text-sm md:text-base' initial={'initial'} whileInView={'animate'}        viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
      <motion.h2 variants={slideFromLeft} className=' dark:text-slate-200 text-2xl mb-10' id='skills'>About Me</motion.h2>
      <motion.div variants={slideFromRight} className='dark:text-slate-400 '>
        <PortableText value={aboutData?.aboutContent}/>
      </motion.div>
      <motion.p variants={slideFromRight} className='dark:text-slate-400 py-4' id='skills'>
        Here are few technologies I&apos;ve been working with recently:
      </motion.p>
      <motion.div className='flex justify-start dark:text-slate-400 leading-9 px-5'>
        {skillsArr?.length && skillsArr?.map((skillArr, i) => {
          return (
            <motion.ul key={i} className='pr-10 list-circle'>
            {
              skillArr.map((skill, j) => {
                return (
                  <motion.li key={j} variants={slideFromRight} className='text-teal-500'> <span className='text-slate-400'>{skill}</span></motion.li>
                  )
              })
            }
          </motion.ul>
        )
        })}
        </motion.div>
    </motion.div>
  </section>
  )
}

export default About