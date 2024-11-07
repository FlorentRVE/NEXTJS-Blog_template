
import Link from "next/link";

export default function BlogPostCard({ post } : { post: any }) {
  return (
    <div className="p-4 border-green-300 border-2">
      <h2>{post.title}</h2>
      <p>
        by {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      <Link href={`/article/${post.slug}`}>Read more</Link>
    </div>
  );
}
