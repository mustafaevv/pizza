import classNames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import links from "../../router";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const location = useLocation();
  return (
    <ul className={classes["list"]}>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className={classNames(
              classes["list__link"],
              location.pathname === link.link
                ? classes["list__link-active"]
                : ""
            )}
            to={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
