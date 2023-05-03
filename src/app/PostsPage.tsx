"use client";

import Link from "next/link";
import type { Post } from "src/types/post";

type Props = {
  allPosts: Post[];
};

export default function PostsPage({ allPosts }: Props) {
  return (
    <>
      <p>記事一覧</p>
      <ul>
        {allPosts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`contents/posts/${post.year}/${post.month}/${post.slug}`}
            >
              {post.title}
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
}
