import {useState} from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Image from 'next/image';

export interface IAppProps {
}

export default function ProjectSlider ({data}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      slides: {
        perView: () => { return window.innerWidth > 800 ? 2 : 1},
        spacing: 30
      },
      loop: true
    })
  return (
    <>
     <div className="navigation-wrapper w-full">
        <div ref={sliderRef} className="keen-slider overflow-visible">
          {data.map((project) => (
            <div key={project._id} className='width-prop keen-slider__slide custom-shadow rounded-xl flex flex-col items-center text-slate-200  box-border overflow-hidden bg-lightNavy min-w-[18rem] max-w-[18rem] lg:max-w-[22rem]'>
            <div className=' overflow-hidden w-full '>
                <Image src={project.image.asset?.url} alt="instagramClone" width={400} height={400} className='w-full object-cover scale-100 hover:scale-110 duration-300 h-[280px] sm:h-[380px] md:h-[280px]'/>
            </div>
            <div className='flex flex-col w-full justify-start py-4 px-6'>
              <h4 className='py-1 leading-6 md:leading-7 lg:leading-8 text-base md:text-lg'>{project.name}</h4>
              <p className='subtext text-slate-400 text-xs md:text-sm'>{project.category}</p>
              <p className='subtext-open text-secondary text-xs md:text-sm flex items-center cursor-pointer'>
              <Link key={project.slug.current} href={`/project/${project.slug.current}`}> 
                <span className='mr-2'>View project</span>
              </Link>
                <HiOutlineArrowNarrowRight/>
              </p>
            </div>
          </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <div className='w-1 h-1 arrow-wrapper bg-primary flex justify-center items-center arrow--left'>                
                <Arrow
                left
                onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
                />
            </div>
            <div className='w-18 h-18 arrow-wrapper bg-primary flex justify-center items-center arrow--right'>
                <Arrow
                onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                }
                />
            </div>
          </>
        )}
      </div>
    </>
  );
}


function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }