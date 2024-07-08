'use client'

import Router from 'next/navigation'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BiChevronsDown } from 'react-icons/bi'
import { PortableText } from '@portabletext/react'
import { HeroData } from '../../utils/types'
import { Button } from '../ui/button'
import Link from 'next/link'
import BlurFade from '../magicui/blur-fade'

type Props = {
  data: HeroData
}

function Hero({ data }: Props) {
  const [text] = useTypewriter({
    words: ["<Front-end Web Developer/>", "<Electronics Enthusiast/>"],
    loop: 0,
  })

  return (
    <section className='flex flex-col px-5 justify-center'>
      <div className='flex flex-col justify-center h-[80vh]'>
        <div className='mt-10 mb-8 dark:text-slate-200 leading-9'>
          {/* <h1 className='text-5xl font-medium pb-2'><span className='text-hover'>H</span><span className='text-hover'>i</span><span className='text-hover'>,</span></h1> */}
          <BlurFade delay={0.25} inView>
            <h6 className='text-secondary mb-4 text-sm lg:text-base font-roboto_mono'>Hey there, <span className='text-xl md:text-2xl hand-wave'>\uD83D\uDC4B\uD83C\uDFFB</span></h6>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight font-roboto-mono mb-2 md:mb-5 whitespace-nowrap'>
              I&apos;m
              <span className='text-secondary ml-6'>
                Vishnu Surendran
              </span>
            </h3>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <div className='overflow-hidden'>
              <h4 className='text-lg md:text-2xl lg:text-3xl font-medium tracking-tight font-roboto-mono mb-1 md:mb-5 whitespace-nowrap'>
                <span>{text}</span>
                <Cursor cursorColor='#14B8A6' />
              </h4>
            </div>
          </BlurFade>
          <BlurFade delay={0.25 * 4} inView>
            <h4 className='text-md md:text-xl lg:text-xl flex flex-wrap leading-6 mb-1 md:mb-2'>
              <span className='text-secondary pr-2 whitespace-nowrap'>{data?.designation}</span>
              <span className='flex'>
                @
                <a href={data?.companyUrl} target="_blank" rel="noreferrer">
                  <p className='company-name pl-2 whitespace-nowrap'>
                    {data?.organization}
                  </p>
                </a>
              </span>
            </h4>
          </BlurFade>
          {/* <p className=' text-secondary mb-3 text-sm lg:text-base'>Front-end Developer | Electronics Enthusiast</p> */}
          <BlurFade delay={0.25 * 5} inView>
            <div className=' leading-6 md:leading-7 lg:leading-8 text-slate-400 text-sm lg:text-base'>
              <PortableText value={data?.content} />
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 6} inView>
          <div className='flex items-center justify-start '>
            <Link href={`${data.resume?.asset.url}?dl=`} target='_blank'>
              <Button variant='secondary' className='text-slate-400 '>
                Get My Resume
              </Button>
            </Link>
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 7} inView>
        <div className=' text-slate-200 flex justify-center items-center w-full h-[20vh]'>
          <div className='flex flex-col items-center'>
            <span className='text-xs scroll-bounce '>Scroll Down</span>
            <span><BiChevronsDown /></span>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}

export default Hero;
