import fs from "fs";
import { POSTS_DIR } from "src/lib/constants";
import { getPost } from "src/lib/api";
import ReactMarkdown from "react-markdown";
import type Post from "src/types/post";

type Props = {
  post: Post;
};

export default function Detail({ post }: Props) {
  return (
    <>
      <div>詳細画面</div>
      <p>{post.slug}</p>
      <p>{post.date}</p>
      <p>{post.title}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  );
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(POSTS_DIR);
  const paths = fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = getPost(`${params.slug}.md`, [
    "slug",
    "title",
    "date",
    "content",
  ]);
  return { props: { post: post } };
}
