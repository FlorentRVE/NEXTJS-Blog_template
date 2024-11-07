import posts from "../app/utils/data";
import BlogPostCardHome from "./components/BlogPostCardHome";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col flex-1 w-[90%] mx-auto p-10">

        <h1 className="text-3xl font-bold text-center">Welcome to My Blog</h1>

        <div className="flex">

          <div className="flex flex-col gap-4 p-10 flex-1">
            {posts.map((post) => (
              <BlogPostCardHome key={post.id} post={post} />
            ))}
          </div>

          <div className="flex flex-col gap-4 p-10 flex-2 border-2 border-green-300">
            <h2>Welcome</h2>
            <p>Petit paragraphe de présentation</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
