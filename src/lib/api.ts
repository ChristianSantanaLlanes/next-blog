import fs from "fs";
import matter from "gray-matter";
import { POSTS_DIR } from "src/lib/constants";

export function getAllPosts(fields: string[]) {
  const fileNames = listFiles(POSTS_DIR);
  const posts = fileNames
    .filter((fileName) => fileName.match(/.+\.md$/))
    .map((fileName) => getPost(fileName, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPost(fileName: string, fields: string[]) {
  const path = fileName
    .replace(/^src\/contents\/posts\//, "")
    .replace(/\.md$/, "");
  const { year, month, slug } = splitPath(path);
  const fileContent = fs.readFileSync(fileName, "utf8");
  const { data, content } = matter(fileContent);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "year") {
      return (items[field] = year);
    }
    if (field === "month") {
      return (items[field] = month);
    }
    if (field === "slug") {
      return (items[field] = slug);
    }
    if (field === "date") {
      return (items[field] = JSON.parse(JSON.stringify(data[field])));
    }
    if (field === "content") {
      return (items[field] = content);
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function listFiles(dir: string): string[] {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dir}/${dirent.name}`]
        : listFiles(`${dir}/${dirent.name}`)
    );
}

type path = {
  year: string;
  month: string;
  slug: string;
};

export function splitPath(path: string): path {
  const splitPath = path.split("/");
  const [year, month, slug] = splitPath;
  return {
    year,
    month,
    slug,
  };
}
