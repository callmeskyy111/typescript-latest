type BlogPost = {
    title: string;
    desc: string;
    author: string;
    isPublished: boolean;
    tags?: string[];
    publishDate?: string;
};
declare const post1: BlogPost;
