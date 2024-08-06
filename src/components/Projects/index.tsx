'use client'

import Image from 'next/image'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { ProjectData } from '../../utils/types';
import Link from 'next/link';
import ProjectSlider from '../ProjectSlider'
import { urlFor } from '../../../sanity/sanity-utils'
import BlurFade from '../magicui/blur-fade';

type Props = {
  data: ProjectData[]
};

function Projects({ data }: Props) {

  return (
    <section className='flex flex-col py-10 px-5' id='projects'>
      <BlurFade delay={0.25} inView>
        <div className='flex'>
          <h2 className=' dark:text-slate-200 text-2xl mb-10' id='projects'>Things I&apos;ve Built</h2>
        </div>
      </BlurFade>
      <div className='lg:flex flex-wrap lg:flex-nowrap lg:grid-cols-3 py-3 px-0 gap-6 justify-start hidden lg:visible'>
        {data?.map((project, i) => {
          return (
            <BlurFade key={project._id} delay={0.25 * (i + 2)} inView>
              <div className=' custom-shadow rounded-xl project-tile h-full flex flex-col items-center text-slate-200  box-border overflow-hidden bg-lightNavy min-w-[18rem] max-w-md lg:max-w-[22rem]'>
                <div className=' overflow-hidden aspect-video h-[60%]'>
                  <Image src={urlFor(project.image).url()} alt="instagramClone" width={400} height={400} className='project-img' />
                </div>
                <div className='flex flex-col w-full justify-start pt-4 pb-3 px-6 h-[40%]'>
                  <h4 className='leading-6 md:leading-7 lg:leading-8 text-base md:text-lg mb-auto'>{project.name}</h4>
                  <p className='subtext text-slate-400 text-xs md:text-sm'>{project.category}</p>
                  <p className='subtext-open text-secondary text-xs md:text-sm flex items-center cursor-pointer'>
                    <Link key={project.slug.current} href={`/project/${project.slug.current}`} scroll={false} className='w-full flex items-center'>
                      <span className='mr-2'>View project</span>
                      <HiOutlineArrowNarrowRight />
                    </Link>
                  </p>
                </div>
              </div>
            </BlurFade>
          )
        })}
      </div>
      <div className='flex lg:hidden w-full '>
        <ProjectSlider data={data} />
      </div>
    </section>
  )
}

export default Projects