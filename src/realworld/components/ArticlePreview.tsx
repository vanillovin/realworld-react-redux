import React from "react";

function ArticlePreview() {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a className="" href="#@Gerome">
          <img src="https://api.realworld.io/images/demo-avatar.png" />
        </a>
        <div className="info">
          <a className="author" href="#@Gerome">
            Gerome
          </a>
          <span className="date">Wed Nov 24 2021</span>
        </div>
        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>127
          </button>
        </div>
      </div>
      <a className="preview-link" href="#article/Explore-implementations-1">
        <h1>Explore implementations</h1>
        <p>discover the implementations created by the RealWorld community</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">codebaseShow</li>
          <li className="tag-default tag-pill tag-outline">implementations</li>
        </ul>
      </a>
    </div>
  );
}

export default ArticlePreview;
