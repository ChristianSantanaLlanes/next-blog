import PostsPage from "./PostsPage";
import { getAllPosts } from "src/lib/api";

export default async function Page() {
  const allPosts = getAllPosts();
  return <PostsPage allPosts={allPosts} />;
}
