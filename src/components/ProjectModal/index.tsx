'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { ProjectData } from '../../utils/types';
import { getDataFromSanity } from '../../../sanity/sanity-utils';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image'
import { PortableText } from '@portabletext/react';



export default  function ProjectModal ({data}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(true);
  }, [router]);
  const tech = ['ReactJS', 'CSS3', 'Firebase']
  return (
    <div>
        <Dialog open={isOpen} onOpenChange={(open) => {if (!open) {router.back()}} } >
            <DialogContent>
              <div className='flex grid-cols-2 justify-center min-h-[45vh] w-full'>
                <div className='px-5 flex items-center max-w-lg'>
                <Image src={data.image.asset?.url} alt="project-image" width={470} height={380} className='rounded-xl w-100 object-cover h-[380px]'/>
                </div>
                <div className='px-5 w-[34rem] leading-6 md:leading-7 lg:leading-8 text-sm md:text-base text-slate-400 font-roboto_mono'>
                  <h4 className=' mb-2'>{data.category}</h4>
                  <h2 className='text-3xl font-medium text-slate-200 mb-5'>{data?.name}</h2>
                  <div className=' mb-4'>
                  <PortableText value={data?.description}/>
                  </div>
                  <p className='mb-6'>Technologies Used: 
                    <span>
                    {
                      data.technologies?.map((item, i, arr) => (
                        ` ${item}${(i+1 !== arr.length) ? ',' : ''}`
                      ))
                    }
                    </span>
                  </p>
                  <Button variant='secondary'>View Repo</Button>
                </div>
              </div>
            </DialogContent>
        </Dialog>
    </div>
  );
}
