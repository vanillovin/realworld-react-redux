import React from "react";
import { useQuery } from "react-query";

interface CommentCardProps {
  body: string;
  author: {
    username: string;
    image: string;
  };
  createdAt: string;
}

function CommentCard({ body, author, createdAt }: CommentCardProps) {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <a className="comment-author" href={"#@" + author.username}>
          <img src={author.image} className="comment-author-img" />
        </a>
        &nbsp;
        <a className="comment-author" href={"#@" + author.username}>
          {author.username}
        </a>
        <span className="date-posted">
          {new Date(createdAt).toLocaleDateString("ko-kr")}
        </span>
      </div>
    </div>
  );
}

function CommentList({ slug }: { slug: string }) {
  const { isLoading, error, data } = useQuery<Array<CommentData>, Error>(
    "Comments/" + slug,
    () =>
      fetch(`https://api.realworld.io/api/articles/${slug}/comments`)
        .then((res) => res.json())
        .then((body) => body.comments)
  );

  return (
    <>
      <p>
        <a className="" href="#login">
          Sign in
        </a>
        &nbsp;or&nbsp;
        <a className="" href="#register">
          sign up
        </a>
        &nbsp;to add comments on this article.
      </p>
      <div>
        {data?.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </>
  );
}

export default CommentList;
