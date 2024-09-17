import { getMediumPostById } from '@/actions/blog-action';
import { getLocalDate } from '@/utils/utils';
import React from 'react'

async function BlogPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const post = await getMediumPostById(slug);
    return (
        <div className='w-screen min-h-screen text-teal-500 px-6 md:px-20 lg:px-32 xl:px-40 2xl:px-96 py-20 leading-8 z-10 relative'>
            <h1 className='text-3xl lg:text-5xl font-semibold text-teal-400'>{post?.title}</h1>
            <div className='text-xs text-slate-200 justify-between py-5 px-2 border-b border-slate-700 mb-5'>
                <div className='mb-1'>Author: {post?.author}</div>
                <div>Published on: {getLocalDate(post?.pubDate)}</div>
            </div>
            <p className='text-slate-200 blog-post' dangerouslySetInnerHTML={{ __html: post?.content || '<div></div>' }}></p>
            <div className='flex flex-wrap gap-3 pt-14'>
                {
                    post?.categories.map((category, index) => {
                        return <div key={index} className='flex items-center justify-center text-nowrap bg-lightNavy px-5 py-2 text-sm rounded-3xl text-center'>{category}</div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogPage