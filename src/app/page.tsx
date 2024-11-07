import posts from "../app/utils/data";
import BlogPostCard from "./components/BlogPostCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col flex-1">
        <h1 className="text-3xl font-bold text-center">Welcome to My Blog</h1>

        <div className="grid grid-cols-3 gap-4 p-10">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
