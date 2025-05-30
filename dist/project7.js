"use strict";
//todo: project7 (Blog Post Status using ENUMs);
var PostStatus;
(function (PostStatus) {
    PostStatus["Draft"] = "DRAFT";
    PostStatus["Published"] = "PUBLISHED";
    PostStatus["Archived"] = "ARCHIVED";
})(PostStatus || (PostStatus = {}));
const post = {
    title: "post1",
    content: "This is post1",
    status: PostStatus.Published,
};
const post2 = {
    title: "post2",
    content: "This is post2",
    status: PostStatus.Draft,
};
console.log(post.status, " ", post.content);
