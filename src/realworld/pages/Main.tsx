import React, { useState, useEffect } from "react";
import "../style.css";
import NavigationBar from "../components/NavigationBar";
import ArticlePreview from "../components/ArticlePreview";
// https://react-redux.realworld.io/#/?_k=62bcsl

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
  // https://api.realworld.io/api/articles?limit=10&offset=0
  const [articleList, setArticleList] = useState<Array<Article>>([]);

  useEffect(() => {
    fetch("https://api.realworld.io/api/articles?limit=10&offset=0")
      .then((res) => res.json())
      .then((body) => setArticleList(body.articles));
  }, []);

  if (articleList.length === 0) {
    return <span>로딩 중</span>;
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
                {articleList.map((article) => (
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
