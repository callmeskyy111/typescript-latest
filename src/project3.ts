//todo: project3 (Create a Type-Alias for a BLOG-POST)

type BlogPost = {
  title: string;
  desc: string;
  author: string;
  isPublished: boolean;
  tags?: string[];
  publishDate?: string;
};

const post1:BlogPost = {
  title: "Learning TS",
  desc: "TS brings type-safety to JS",
  author: "Skyy",
  isPublished: true,
  tags: ["ts", "js", "programming"],
  publishDate: "2025-04-11",
};
