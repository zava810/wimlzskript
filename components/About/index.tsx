import {motion} from 'framer-motion'
import { slideFromLeft, slideFromRight } from '../../utils/Animations'

type Props = {}

function About({}: Props) {
  return (
    <section className='flex flex-col py-10 px-5'>
    <motion.div className='flex flex-col justify-start leading-6 md:leading-7 lg:leading-8 text-sm md:text-base' initial={'initial'} whileInView={'animate'}        viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
      <motion.h2 variants={slideFromLeft} className=' dark:text-slate-200 text-2xl mb-10' id='skills'>About Me</motion.h2>
      <motion.p variants={slideFromRight} className='dark:text-slate-400 '>Hello! My name is Vishnu and I&apos;m passionate about creating visually stunning and user-friendly web interfaces.
        I have a strong background in front-end technologies such as HTML, CSS, JavaScript, and experience with popular front-end frameworks and libraries
        such as React, Angular. I am skilled in creating responsive, mobile-friendly websites.
        I have experience in multiple project and industries, from simple landing pages to complex web applications. 
        I am always up for new challenges and love to stay updated with new technologies and trends in the industry.
        Currently I&apos;m working as Software Engineer at QBurst Technologies.
      </motion.p>
      <motion.p variants={slideFromRight} className='dark:text-slate-400 py-4' id='skills'>
        Here are few technologies I&apos;ve been working with recently:
      </motion.p>
      <motion.div className='flex justify-start dark:text-slate-400 leading-9 px-5'>
        <motion.ul className='pr-10 list-circle'>
          <motion.li variants={slideFromRight} className='text-teal-500'> <span className='text-slate-400'>JavaScript</span></motion.li>
          <motion.li variants={slideFromRight} className='text-teal-500'><span className='text-slate-400'>Angular</span></motion.li>
          <motion.li variants={slideFromRight} className='text-teal-500'> <span className='text-slate-400'>TypeScript</span></motion.li>
        </motion.ul>
        <motion.ul className='list-circle'>
          <motion.li variants={slideFromRight} className='text-teal-500'> <span className='text-slate-400'>Next.js</span></motion.li>
          <motion.li variants={slideFromRight} className='text-teal-500'><span className='text-slate-400'>Tailwind</span></motion.li>
          <motion.li variants={slideFromRight} className='text-teal-500'><span className='text-slate-400'>ReactJS</span></motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default About