import { Metadata } from 'next'
import { getDataFromSanity } from '../../sanity/sanity-utils'
import Hero from '../components/Hero'
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
  title: 'wiml itslab',
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
      <div className='lg:mx-auto lg:max-w-6xl relative'>
        <Hero data={heroData[0]}/>
        <About data={aboutData[0]} />
        <Experience data={experienceData} />
        <Projects data={projectData} />
        <Contact/>
      </div>
    </div>
  )
}
