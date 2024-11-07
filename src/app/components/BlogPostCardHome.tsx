import Image from "next/image";
import Link from "next/link";

export default function BlogPostCardHome({ post }: { post: any }) {
  return (
    <div className="p-4 border-green-300 border-2 flex flex-col justify-center items-center">
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <h2>{post.title}</h2>
      {/* <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={200}
      /> */}
      <img
        src="https://placehold.co/600x400"
        alt={post.title}
        width={600}
        height={400}
      />
      <Link href={`/article/${post.slug}`}>Read more</Link>
    </div>
  );
}
