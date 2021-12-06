import React from "react";
type Article = {
  authorName: string;
  createdAt: Date;
  favoriteCount: number;
  title: string;
  description: string;
  tagList: Array<string>;
};

function ArticlePreview({
  authorName,
  createdAt,
  favoriteCount,
  title,
  description,
  tagList,
}: Article) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a className="" href="#@Gerome">
          <img src="https://api.realworld.io/images/demo-avatar.png" />
        </a>
        <div className="info">
          <a className="author" href="#@Gerome">
            {authorName}
          </a>
          <span className="date">{createdAt.toLocaleDateString("ko-kr")}</span>
        </div>
        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            {favoriteCount}
          </button>
        </div>
      </div>
      <a className="preview-link" href="#article/Explore-implementations-1">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList.map((tag) => (
            <li className="tag-default tag-pill tag-outline">{tag}</li>
          ))}
        </ul>
      </a>
    </div>
  );
}

export default ArticlePreview;
