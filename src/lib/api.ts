import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POSTS_DIR } from "src/lib/constants";

export function getAllPosts(fields: string[]) {
  const fileNames = fs.readdirSync(POSTS_DIR);
  const posts = fileNames
    .map((fileName) => getPost(fileName, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPost(fileName, fields: string[]) {
  const realSlug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(POSTS_DIR, fileName);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}
