import React from "react";
import { Link } from "react-router-dom";

type Article = {
  slug: string;
  authorName: string;
  createdAt: Date;
  favoriteCount: number;
  title: string;
  description: string;
  tagList: Array<string>;
};

function ArticlePreview({
  slug,
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
      <Link to={"/articles/" + slug} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

export default ArticlePreview;
