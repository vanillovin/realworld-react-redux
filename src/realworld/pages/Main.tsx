import React from "react";
import "../style.css";
import NavigationBar from "../components/NavigationBar";
// https://react-redux.realworld.io/#/?_k=62bcsl
import ArticlePreview from "../components/ArticlePreview";

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
                <ArticlePreview
                  authorName="Gerome"
                  createdAt={new Date("2021-11-24")}
                  favoriteCount={194}
                  title="Create a new implementation"
                  description="join the community by creating a new implementation"
                  tagList={["implementations"]}
                />
                <ArticlePreview
                  authorName="Gerome"
                  createdAt={new Date("2021-11-24")}
                  favoriteCount={128}
                  title="Explore implementations"
                  description="discover the implementations created by the RealWorld community"
                  tagList={["codebaseShow", "implementations"]}
                />
                <ArticlePreview
                  authorName="Gerome"
                  createdAt={new Date("2021-11-24")}
                  favoriteCount={80}
                  title="Welcome to RealWorld project"
                  description="Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more"
                  tagList={["welcome", "introduction"]}
                />
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
