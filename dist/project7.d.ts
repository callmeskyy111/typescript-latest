declare enum PostStatus {
    Draft = "DRAFT",
    Published = "PUBLISHED",
    Archived = "ARCHIVED"
}
type Blog = {
    title: string;
    content: string;
    status: PostStatus;
};
declare const post: Blog;
declare const post2: Blog;
