import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";

const Posts = [
  {title : 'React Testing', excerpt : 'Learn React Testing'},
  {title : 'React with Tailwind', excerpt : 'Learn React with Tailwind'},
  {title : 'Next.js', excerpt : 'Learn Next.js'},
  {title : 'React with Redux', excerpt : 'Learn React with Redux'}
]

export default function Home() {
  return (
    <main className="container mx-auto py-24 px-14 flex items-center justify-center flex-col text-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* left : Posts */ }
        <div className="lg:col-span-8 col-span-1">
          {Posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>

        {/* right : Categories & Post Widget */}
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-4">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
