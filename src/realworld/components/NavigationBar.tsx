import React from "react";
import { Link } from "react-router-dom";
import useCurrentUserAtom from "../state/currentUserAtom";

function DefaultNav() {
  return (
    <>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Sign up
        </Link>
      </li>
    </>
  );
}

function LoginNav({ currentUser }: { currentUser: User }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#editor">
          <i className="ion-compose"></i>&nbsp;New Article
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#settings">
          <i className="ion-gear-a"></i>&nbsp;Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={"#@" + currentUser.username}>
          <img
            src={
              currentUser.image
                ? currentUser.image
                : "https://api.realworld.io/images/smiley-cyrus.jpeg"
            }
            className="user-pic"
          />
          {currentUser.username}
        </a>
      </li>
    </>
  );
}

function NavigationBar() {
  const { currentUser } = useCurrentUserAtom();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          {currentUser !== null ? (
            <LoginNav currentUser={currentUser} />
          ) : (
            <DefaultNav />
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
