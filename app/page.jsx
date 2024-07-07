import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";

import { getPosts } from "@/services";

import Posts from "@/components/Posts";


export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* left : Posts */}
        <div className="lg:col-span-8 col-span-1">
          <Posts />
        </div>

        {/* right : Categories & Post Widget */}
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
