import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
                    <footer className='flex flex-col justify-center items-center'>
              <div className='flex items-center justify-center mb-5'>
                  <div className='px-10'>
                    <AiFillLinkedin onClick={() => socialRedirect("linkedIn")} className='text-black dark:text-slate-200 text-xl cursor-pointer'/>
                  </div>
                  <div className='px-10'>
                    <AiFillGithub onClick={() => socialRedirect("github")} className='text-black dark:text-slate-200 text-xl cursor-pointer'/>
                  </div>
                  <div className='px-10'>
                    <AiOutlineInstagram onClick={() => socialRedirect("instagram")} className='text-black dark:text-slate-200 text-xl cursor-pointer'/>
                  </div>
                </div>
              <p className='italic font-light text-slate-400 text-xs'>Designed & Developed by Vishnu Surendran</p>
            </footer>
        </>
    )
}