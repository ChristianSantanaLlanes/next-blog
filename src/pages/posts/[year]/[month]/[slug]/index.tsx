import { POSTS_DIR } from "src/lib/constants";
import { getAllPosts, getPost } from "src/lib/api";
import ReactMarkdown from "react-markdown";
import PostImage from "src/components/PostImage";
import type Post from "src/types/post";

type Props = {
  post: Post;
};

export default function PostDetail({ post }: Props) {
  const markdownComponents = {
    img: (image) => {
      return (
        <PostImage
          src={
            require(`src/posts/${post.year}/${post.month}/${post.slug}/${image.src}`)
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
