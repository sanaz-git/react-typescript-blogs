export interface IBlog {
  _id: string;
  title: string;
  image: string;
  text: string;
  author: string;
}
export interface IPropsBlogs {
  blogs: IBlog[];
  blog: IBlog;
  key: number;
}

export type IPropsBlog = Omit<IPropsBlogs, "blogs">;
export type PropsBlogs = Omit<IPropsBlogs, "blog" | "key">;
export type TAddBlog = Omit<IBlog, "_id">;
