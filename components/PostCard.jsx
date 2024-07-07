import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.excerpt}</p>
    </div>
  )
}

export default PostCard