import PostsPage from "../../PostsPage";
import { Pagination } from "../../Pagination";
import { getAllPosts } from "src/lib/api";
import { PER_PAGE } from "src/lib/constants";

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(allPosts.length / PER_PAGE)).map((id) => {
    return {
      id: String(id),
    };
  });

  return paths;
}

export default async function Page({ params }: any) {
  const allPosts = getAllPosts();
  const offset: number = (Number(params.id) - 1) * PER_PAGE;
  const limit: number = PER_PAGE;
  const limitPosts = getAllPosts(offset, limit);
  return (
    <>
      <PostsPage allPosts={limitPosts} />
      <Pagination
        totalCount={allPosts.length}
        currentPageID={Number(params.id)}
      />
    </>
  );
}
