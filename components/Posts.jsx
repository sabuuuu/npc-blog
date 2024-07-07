'use client'

import React, { useEffect, useState } from 'react';
import PostCard from "@/components/PostCard";
import { getPosts } from "@/services"

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts();
      setPosts(result);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {posts.map(({ node }) => (
          <PostCard key={node.slug} post={node} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
