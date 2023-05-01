import Layout from "src/components/Layout";
import Link from "next/link";
import { getAllPosts } from "src/lib/api";
import type Post from "src/types/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <p>記事一覧</p>
      <ul>
        {allPosts.map((post) => (
          <div key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "content"]);
  return {
    props: {
      allPosts,
    },
  };
}
