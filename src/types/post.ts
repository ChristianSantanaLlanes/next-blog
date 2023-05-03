export type PostFrontMatter = {
  title: string;
  date: string;
  content: string;
};

export type PostDir = {
  year: string;
  month: string;
  slug: string;
};

export type Post = PostFrontMatter & PostDir;
