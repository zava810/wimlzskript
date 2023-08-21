// import Experience from '../../components/Experience'
import { Metadata } from 'next'
import { getDataFromSanity } from '../../sanity/sanity-utils'
import Hero from '../components/Hero'
// import About from '../../components/About'
// import Projects from '../../components/Projects'
// import Contact from '../../components/Contact'
// import { useCallback } from 'react'
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { particleOptions } from '../utils/Particle'
// import { getDataFromSanity } from '../../sanity/sanity-utils'
// import { GetStaticProps } from 'next'
import { AboutData, ExperienceData, HeroData, ProjectData } from '../utils/types'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

type Props = {
  heroData: HeroData,
  aboutData: AboutData,
  experienceData: ExperienceData[],
  projectData: ProjectData[]
}

export const metadata: Metadata = {
  title: 'Vishnu Surendran',
  description: 'Personal portfolio'
}

async function getData(type, containsImage, fileName?) {
  const data = await getDataFromSanity(type, containsImage, false, fileName);
  return data;
}


export default async function Home() {
  const heroData: HeroData = await getData('Hero', true, 'resume');
  const aboutData: AboutData = await getData('About', false);
  const experienceData: ExperienceData[] = await getData('Experience', false);
  const projectData: ProjectData[] = await getData('Projects', false);
  

  return (
    <div className="dark">
        {/* <Particles className='z-0' id="tsparticles" init={particlesInit} loaded={particlesLoaded}  options= {particleOptions} /> */}
      <div className='lg:mx-auto lg:max-w-6xl relative'>
        {/* Hero Section */}
        <Hero data={heroData[0]}/>
        {/* About Section */}
        <About data={aboutData[0]} />
        {/* Experience Section */}
        <Experience data={experienceData} />
        {/* Projects */}
        <Projects data={projectData} />
        {/* Get in touch */}
        <Contact/>
      </div>
    </div>
  )
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const heroData: HeroData = await getDataFromSanity('Hero', false);
//   const aboutData: AboutData = await getDataFromSanity('About', false);
//   const skillsArr = splitSkillArr(aboutData[0]);
//   aboutData[0].skillsArr = skillsArr;
//   const experienceData: ExperienceData[] = await getDataFromSanity('Experience', false);
//   const projectData: ProjectData[] = await getDataFromSanity('Projects', true);
//   return {
//     props: {
//       heroData: heroData[0],
//       aboutData: aboutData[0],
//       experienceData,
//       projectData,
//     },
//     // Revalidate static data each 1 day
//     revalidate: (60 * 60 * 24),
//   }
// }

// export const splitSkillArr = (arr) => {
//   return arr.skills?.reduce((acc, curr, i) => {
//     if (!(i%3)) {
//       acc.push(arr.skills.slice(i, i+3));
//     }
//     return acc;
//   }, []);
// }

