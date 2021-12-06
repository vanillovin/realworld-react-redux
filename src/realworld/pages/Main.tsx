import React from "react";
import "../style.css";
// https://react-redux.realworld.io/#/?_k=62bcsl

function Main() {
  return (
    <div data-reactroot="">
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
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
                        <i className="ion-heart"></i> 193
                      </button>
                    </div>
                  </div>
                  <a
                    className="preview-link"
                    href="#article/Create-a-new-implementation-1"
                  >
                    <h1>Create a new implementation</h1>
                    <p>join the community by creating a new implementation</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      <li className="tag-default tag-pill tag-outline">
                        implementations
                      </li>
                    </ul>
                  </a>
                </div>
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
                  <a
                    className="preview-link"
                    href="#article/Explore-implementations-1"
                  >
                    <h1>Explore implementations</h1>
                    <p>
                      discover the implementations created by the RealWorld
                      community
                    </p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      <li className="tag-default tag-pill tag-outline">
                        codebaseShow
                      </li>
                      <li className="tag-default tag-pill tag-outline">
                        implementations
                      </li>
                    </ul>
                  </a>
                </div>
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
                        <i className="ion-heart"></i>79
                      </button>
                    </div>
                  </div>
                  <a
                    className="preview-link"
                    href="#article/Welcome-to-RealWorld-project-1"
                  >
                    <h1>Welcome to RealWorld project</h1>
                    <p>
                      Exemplary fullstack Medium.com clone powered by React,
                      Angular, Node, Django, and many more
                    </p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      <li className="tag-default tag-pill tag-outline">
                        welcome
                      </li>
                      <li className="tag-default tag-pill tag-outline">
                        introduction
                      </li>
                    </ul>
                  </a>
                </div>
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
