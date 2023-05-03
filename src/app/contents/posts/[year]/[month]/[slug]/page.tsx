import { getAllPosts, getPost } from "src/lib/api";
import PostPage from "./PostPage";
import { Metadata } from "next";
import { PostDir } from "src/types/post";

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const paths: PostDir[] = allPosts.map((post) => {
    return {
      year: post.year,
      month: post.month,
      slug: post.slug,
    };
  });

  return paths;
}

export default async function Page({ params }: any) {
  const postDir: PostDir = {
    year: params.year,
    month: params.month,
    slug: params.slug,
  };
  const post = getPost(postDir);
  return <PostPage post={post} />;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const postDir: PostDir = {
    year: params.year,
    month: params.month,
    slug: params.slug,
  };
  const post = getPost(postDir);
  return { title: post.title };
}
