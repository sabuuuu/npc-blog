import React from 'react'

const Author = ({ post }) => {
  const author = post.author[0];
  return (
    <section className="text-center mt-20 mb-8 pt-12 pb-6 relative rounded-xl bg-[#a266cf] bg-opacity-20">
      {author && (
        <div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-14">
            <img
              unoptimized
              alt={author.name}
              className="align-middle rounded-full h-28 w-28 object-cover"
              src={author.photo.url}
            />
          </div>
          <h3 className="text-[#f4ecfb] mt-4 mb-2 text-xl font-bold">{author.name}</h3>
          <p className="text-[#f4ecfb] text-lg">{author.bio}</p>
        </div>
      ) || <div className="text-[#f4ecfb] text-xl font-bold">author goes brrrr</div>}
    </section>
  )
}

export default Author