'use client'

import BlurFade from '../magicui/blur-fade'
import { Button } from '../ui/button'

type Props = {}

function Contact({ }: Props) {
  const sendMail = () => {
    window.location.href = "mailto:vishnuksvichu12345@gmail.com"
  }
  return (
    <section className='flex flex-col px-5 py-10 mb-10 box' id='contact'>
      <div className='flex flex-col justify-center'>
        <BlurFade delay={0.25} inView>
          <h2 className='dark:text-slate-200 text-2xl mb-10' id='contact'>Get In Touch</h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className=' text-slate-400 mb-5 leading-6 md:leading-7 lg:leading-8 text-sm lg:text-base'>
            Thank you for visiting my portfolio website. Although I’m not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!. Alternatively, you can also find me on LinkedIn.
            Feel free to connect with me and view my professional profile for more information about my background and experience.
          </p>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <div className='flex items-center justify-start'>
            <Button variant='secondary' className='text-slate-400' onClick={() => sendMail()}>Contact Me</Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

export default Contact