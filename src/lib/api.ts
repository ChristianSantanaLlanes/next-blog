import fs from "fs";
import matter from "gray-matter";
import { POSTS_DIR } from "src/lib/constants";
import type { Post, PostDir } from "src/types/post";

// postの配列を返す
export function getAllPosts(): Post[] {
  const postFilePaths = listFiles(POSTS_DIR);
  const posts = postFilePaths
    .filter((filePath) => filePath.match(/.+\.md$/))
    .map((filePath) => getPost(factoryPostDir(filePath)))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// postを返す
export function getPost(postDir: PostDir): Post {
  const filePath = postFilePath(postDir);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const title = data["title"];
  const date = JSON.parse(JSON.stringify(data["date"]));
  const { year, month, slug } = postDir;

  return {
    title,
    date,
    content,
    year,
    month,
    slug,
  };
}

function listFiles(dir: string): string[] {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dir}/${dirent.name}`]
        : listFiles(`${dir}/${dirent.name}`)
    );
}

function postFilePath({ year, month, slug }: PostDir): string {
  return `${POSTS_DIR}/${year}/${month}/${slug}/index.md`;
}

function factoryPostDir(postFilePath: string): PostDir {
  const filePath = postFilePath
    .replace(/^src\/contents\/posts\//, "")
    .replace(/\.md$/, "");
  const splitPath = filePath.split("/");
  const [year, month, slug] = splitPath;
  return {
    year,
    month,
    slug,
  };
}
