import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { getLocalDate } from '@/utils/utils'

interface BlogListProps {
    posts: any
}

function BlogList({ posts }: BlogListProps) {
    return (
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 justify-center'>
            {posts?.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                    <BlogCard key={index} post={post} />
                </Link>
            ))}
        </div>
    )
}

export default BlogList

function BlogCard({ post }: { post: any }) {
    return (
        <Card className='w-full h-full flex flex-col justify-between border-teal-800'>
            <div className='mb-3'>
                <CardHeader>
                    <CardTitle className='text-xl'>{post.title}</CardTitle>
                    <CardDescription className='text-xs italic text-slate-200'>Author: {post.author}</CardDescription>
                </CardHeader>
                <CardContent className='line-clamp-3 text-slate-400 text-sm leading-7 mb-4'>
                    <p dangerouslySetInnerHTML={{ __html: post.description.split('</p>')[0] }}></p>
                </CardContent>
            </div>
            <CardFooter>
                <p className='text-xs italic text-slate-200 '>Published on: {getLocalDate(post.pubDate)}</p>
            </CardFooter>
        </Card>
    )
}