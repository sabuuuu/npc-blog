import React from 'react';
import Link from 'next/link'
import moment from 'moment';

const PostCard = ({ post }) => {
  const author = post.author[0];
  return (
    <div className="bg-[#a266cf] p-4 rounded-xl shadow-lg lg:px-5 lg:py-7 pb-10 mb-8">
      <img src={post.featuredImage.url} alt={post.title} className="w-full h-60 object-cover rounded-t-lg" />
      <div className="flex text-center items-center justify-center my-4 w-full ">
        {author && (
          <div className="flex items-center">
            {author.photo && author.photo.url && (
              <img
                src={author.photo.url}
                alt={author.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <p className="text-gray-600 ml-4  text-lg">{author.name}</p>
          </div>
        )}
        <div className="text-gray-600 ml-4 text-lg flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#351447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="">{moment(post.createdAt).format('DD MMMM, YYYY')}</span>
        </div>
      </div>
      <h1 className="text-xl font-extrabold mt-4 text-center text-[#f4ecfb] transition duration-300 hover:text-[#351447] mb-2">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <p className="text-center text-lg font-medium text-[#351447] mb-6">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`} className="transition duration-300 text-[#f4ecfb] font-medium hover:bg-[#502b64] bg-[#351447] px-16 py-2 rounded-lg shadow-xl">Continue reading</Link>
      </div>
    </div>
  );
};

export default PostCard;
