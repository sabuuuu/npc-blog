'use client';

import React,{useState, useEffect} from 'react'
import { getPostDetails, getPosts } from '@/services';
import Categories from "@/components/Categories";
import PostWidget from "@/components/PostWidget";
import PostDetail from '@/components/PostDetail';
import Author from '@/components/Author'; 
import Comments from '@/components/Comments';
import CommentsForm from '@/components/CommentsForm';

const PostDetails = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostDetails(slug).then((data) => {
      setPost(data);
    });
  }, [slug]);

  if (!post) {
    return <div className="text-center text-[#703893] text-xl font-bold">Loading...</div>;
  }

  return (
    <section className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail post={post} />
          <Author post={post} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget slug={post.slug} categories={post.category} />
            <Categories />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
