import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <div className={classes["header__content"]}>
        <Link className={classes["header__logo"]} to="/">
          <img
            className={classes["header__logo-img"]}
            src={logo}
            alt="React Pizza"
          />
          <div className={classes["header__logo-items"]}>
            <p className={classes["header__logo-title"]}>REACT PIZZA</p>
            <p className={classes["header__logo-desc"]}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </Link>
        <Link to="/cart" className={classes["header__button"]}>
          520 ₽ | 3
        </Link>
      </div>
    </header>
  );
};

export default Header;
