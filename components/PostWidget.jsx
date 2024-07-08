"use client"

import React, { useEffect, useState } from 'react'
import moment from 'moment';
import Link from 'next/link'

import {getRecentPosts ,getSimilarPosts} from '@/services'

const PostWidget = ({categories , slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
        console.log(result);
      })
  },[])

  return (
    <section className="bg-[#a266cf] rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-[#f4ecfb] border-opacity-45 pb-2 text-[#f4ecfb]">
        Recent Posts
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              className="align-middle rounded-full h-16 w-16"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-[#e8d9f5] text-xs font-medium">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-md font-bold text-[#f4ecfb] hover:text-[#351447] transition duration-200 ease-in-out"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default PostWidget