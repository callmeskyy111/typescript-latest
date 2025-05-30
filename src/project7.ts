//todo: project7 (Blog Post Status using ENUMs);

enum PostStatus {
  Draft = "DRAFT",
  Published = "PUBLISHED",
  Archived = "ARCHIVED",
}

type Blog = {
  title: string;
  content: string;
  status: PostStatus;
};

const post: Blog = {
  title: "post1",
  content: "This is post1",
  status: PostStatus.Published,
};

const post2: Blog = {
  title: "post2",
  content: "This is post2",
  status: PostStatus.Draft,
};

console.log(post.status," " ,post.content);