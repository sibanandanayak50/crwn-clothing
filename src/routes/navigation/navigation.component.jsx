import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import SignIn from "../sign-in/sign-in.component.jsx";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="sign-in">
            SIGN IN
          </Link>
          <Link className="nav-link"></Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
