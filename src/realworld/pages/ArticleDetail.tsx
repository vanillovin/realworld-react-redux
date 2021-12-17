import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import CommentList from "../components/CommentList";
import NavigationBar from "../components/NavigationBar";

function ArticleDetail() {
  const { slug } = useParams();

  const { isLoading, error, data } = useQuery<Article, Error>(
    "Article/" + slug,
    () =>
      fetch(`https://api.realworld.io/api/articles/${slug}`)
        .then((res) => res.json())
        .then((body) => body.article)
  );

  if (isLoading) {
    return <span>로딩 중</span>;
  }

  if (error instanceof Error) {
    return (
      <span>
        에러가 발생했습니다.
        {error?.message}
      </span>
    );
  }

  if (data === undefined) {
    return <span>아티클이 없습니다!</span>;
  }

  const authorName = data.author.username;

  return (
    <div data-reactroot="">
      <NavigationBar />
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{data.title}</h1>
            <div className="article-meta">
              <a className="" href={"#@" + authorName}>
                <img src={data.author.image} />
              </a>
              <div className="info">
                <a className="author" href={"#@" + authorName}>
                  {authorName}
                </a>
                <span className="date">
                  {new Date(data.createdAt).toLocaleDateString("ko-kr")}
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
                <p>{data.body}</p>
              </div>
              <ul className="tag-list">
                {data.tagList.map((tag) => (
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
              {slug ? <CommentList slug={slug} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
