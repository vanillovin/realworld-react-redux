
type Todo = {
    id: string;
    content: string;
    completed: boolean;
};

type Filter = "all" | "active" | "completed";

type Article = {
    author: {
      username: string;
      bio: null | string;
      image: string;
    };
    body: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: Array<string>;
    title: string;
    createdAt: string;
    updateAt: string;
};

type CommentData = {
    id: number;
    author: {
        username: string;
        bio: null | string;
        image: string;
        following: boolean;
      };
    createdAt: string;
    updateAt: string;
    body: string;
}

type User = {
  username: string,
  email: string,
  bio: string | null,
  image: string,
  token: string,
}