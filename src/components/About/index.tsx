'use client'

import { PortableText } from '@portabletext/react'
import { AboutData } from '../../utils/types';
import { IconCloudDemo } from '../IconCloud';
import BlurFade from '../magicui/blur-fade';

type Props = {
  data: AboutData
}

function About({ data }: Props) {


  return (
    <section className='flex flex-col py-10 px-5'>
      <div className='flex flex-col justify-start leading-6 md:leading-7 lg:leading-8 text-sm lg:text-base'>
        <BlurFade delay={0.25} inView>
          <h2 className=' dark:text-slate-200 text-2xl mb-10' id='skills'>About Me</h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <div className='dark:text-slate-400 '>
            <PortableText value={data?.aboutContent} />
          </div>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <p className='dark:text-slate-400 py-4' id='skills'>
            Here are few technologies I&apos;ve been working with recently:
          </p>
        </BlurFade>
        <div className="flex justify-between flex-col md:flex-row" id='skills'>
          <BlurFade delay={0.25 * 4} inView  className="w-full md:w-3/5">
            <div className='grid grid-cols-2 sm:grid-cols-3 justify-start dark:text-slate-400 leading-9 w-full'>
              {
                data.skills.map((skill, i) => (
                  <li className='list-circle text-secondary py-2' key={i}>
                    <span className='text-slate-400'>
                      {skill}
                    </span>
                  </li>
                ))
              }
            </div>
          </BlurFade>
          <BlurFade delay={0.25 * 5} inView className='w-full md:w-2/5 flex justify-center'>
              <IconCloudDemo />
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

export default About