import posts from "../../utils/data";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>
        by {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      <div>{post.content}</div>
    </>
  );
}
