import React from 'react'
import { getMediumPosts } from '../../actions/blog-action';
import BlogList from './BlogList';

const Blog = async () => {
  const posts = await getMediumPosts();
  return (
    <>
      <div className='w-screen min-h-screen bg-primary text-teal-500 px-10 lg:px-20 xl:px-30 2xl:px-96 py-20'>
        <h2 className='text-2xl text-slate-200 font-semibold mb-5'>Checkout my latest blogs</h2>
        <div className='py-5'>
          <BlogList posts={posts.items} />
        </div>
      </div>
    </>
  )
}

export default Blog