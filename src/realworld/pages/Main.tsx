import React from "react";
import "../style.css";
import NavigationBar from "../components/NavigationBar";
import ArticlePreview from "../components/ArticlePreview";
import { useQuery } from "react-query";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
}

function Main() {
  // https://ko.javascript.info/destructuring-assignment#ref-546

  // 리액트 쿼리 문서 https://react-query.tanstack.com/overview

  const {
    isLoading,
    error,
    data: articleList,
  } = useQuery<Array<Article>, Error>("ArticleList", () =>
    fetch("https://api.realworld.io/api/articles?limit=10&offset=0")
      .then((res) => res.json())
      .then((body) => body.articles)
  );

  if (isLoading) {
    return <span>로딩 중</span>;
  }

  if (error instanceof Error) {
    return <span>에러가 발생했습니다. {error.message}</span>;
  }

  return (
    <div>
      <NavigationBar />
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a href="" className="nav-link active">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                {articleList?.map((article) => (
                  <ArticlePreview
                    key={article.slug}
                    slug={article.slug}
                    authorName={article.author.username}
                    createdAt={new Date(article.createdAt)}
                    favoriteCount={article.favoritesCount}
                    title={article.title}
                    description={article.description}
                    tagList={article.tagList}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <div className="tag-list"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
