import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavigationBar from "../components/NavigationBar";

`/articles/:slug`;
// http://localhost:3000/articles/라면-먹기

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

function ArticleDetail() {
  const { slug } = useParams();

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.realworld.io/api/articles/${slug}`)
      .then((res) => res.json())
      .then((body) => setArticle(body.article));
  }, []);

  const [commentList, setCommentList] = useState<Array<CommentData> | null>(
    null
  );

  useEffect(() => {
    fetch(`https://api.realworld.io/api/articles/${slug}/comments`)
      .then((res) => res.json())
      .then((body) => setCommentList(body.comments));
  }, []);

  if (article === null || commentList === null) {
    return <span>로딩 중</span>;
  }

  const authorName = article.author.username;

  return (
    <div data-reactroot="">
      <NavigationBar />
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <div className="article-meta">
              <a className="" href={"#@" + authorName}>
                <img src={article.author.image} />
              </a>
              <div className="info">
                <a className="author" href={"#@" + authorName}>
                  {authorName}
                </a>
                <span className="date">
                  {new Date(article.createdAt).toLocaleDateString("ko-kr")}
                </span>
              </div>
              <span></span>
            </div>
          </div>
        </div>
        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{article.body}</p>
              </div>
              <ul className="tag-list">
                {article.tagList.map((tag) => (
                  <li key={tag} className="tag-default tag-pill tag-outline">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <br />
          <div className="article-actions"></div>
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
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
                {commentList.map((comment) => (
                  <CommentCard key={comment.id} {...comment} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// https://react-redux.realworld.io/#/article/Create-a-new-implementation-1?_k=9q4d9f
export default ArticleDetail;
