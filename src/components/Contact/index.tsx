'use client'

import { motion } from 'framer-motion'
import { fadeIn, slideFromLeft, slideFromRight } from '../../utils/Animations'

type Props = {}

function Contact({}: Props) {
    const sendMail = () => {
        window.location.href = "mailto:vishnuksvichu12345@gmail.com"
      }
  return (
    <section className='flex flex-col px-5 py-10 mb-10 box'>
    <motion.div className='flex flex-col justify-center' initial={'initial'} whileInView={'animate'} viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
      <motion.h2 variants={slideFromLeft} className='dark:text-slate-200 text-2xl mb-10' id='contact'>Get In Touch</motion.h2>
      <motion.p variants={slideFromRight} className=' text-slate-400 mb-5 leading-6 md:leading-7 lg:leading-8 text-sm md:text-base'>
        Thank you for visiting my portfolio website. Although I’m not currently looking for any new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!. Alternatively, you can also find me on LinkedIn. 
        Feel free to connect with me and view my professional profile for more information about my background and experience.
      </motion.p>
      <motion.div variants={fadeIn} className='flex items-center justify-start'>
        <button className='px-8 py-3 dark:text-slate-200 hover:bg-teal-500 border-2 border-teal-500 rounded-3xl transition ease-in' onClick={() => sendMail()}>Contact Me</button>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default Contact