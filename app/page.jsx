import Categories from "@/components/Categories";
import PostWidget from "@/components/PostWidget";
import Posts from "@/components/Posts";


export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <Posts />
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
