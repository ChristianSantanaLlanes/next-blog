"use client";

import ReactMarkdown from "react-markdown";
import PostImage from "./PostImage";
import type { Post } from "src/types/post";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  const markdownComponents = {
    img: (image: any) => {
      return (
        <PostImage
          src={
            require(`src/contents/posts/${post.year}/${post.month}/${post.slug}/${image.src}`)
              .default.src
          }
          alt={image.alt}
        />
      );
    },
  };

  return (
    <>
      <div>詳細画面</div>
      <p>{post.slug}</p>
      <p>{post.date}</p>
      <p>{post.title}</p>
      <ReactMarkdown components={markdownComponents}>
        {post.content}
      </ReactMarkdown>
    </>
  );
}
