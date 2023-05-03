import PostsPage from "./PostsPage";
import { Pagination } from "./Pagination";
import { getAllPosts } from "src/lib/api";
import { PER_PAGE } from "src/lib/constants";

export default async function Page() {
  const allPosts = getAllPosts();
  const limitPosts = getAllPosts(0, PER_PAGE);
  return (
    <>
      <PostsPage allPosts={limitPosts} />;
      <Pagination totalCount={allPosts.length} currentPageID={1} />
    </>
  );
}
