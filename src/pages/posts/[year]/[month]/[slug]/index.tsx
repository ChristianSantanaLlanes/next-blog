import { POSTS_DIR } from "src/lib/constants";
import { getAllPosts, getPost, listFiles, splitPath } from "src/lib/api";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import type Post from "src/types/post";

type Props = {
  post: Post;
};

export default function Detail({ post }: Props) {
  const image = require("src/posts/2023/05/postdir_in_image_path/neko_image-1024x856.jpg");
  return (
    <>
      <div>詳細画面</div>
      <p>{post.slug}</p>
      <p>{post.date}</p>
      <p>{post.title}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <Image src={image} alt="test" title="test" />
    </>
  );
}

export async function getStaticPaths() {
  const allPosts = getAllPosts([
    "slug",
    "year",
    "month",
    "title",
    "date",
    "content",
  ]);
  const paths = allPosts.map((post) => {
    return {
      params: {
        year: post.year,
        month: post.month,
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const path = `${POSTS_DIR}/${params.year}/${params.month}/${params.slug}/index.md`;
  const post = getPost(path, [
    "year",
    "month",
    "slug",
    "title",
    "date",
    "content",
  ]);
  return { props: { post: post } };
}
