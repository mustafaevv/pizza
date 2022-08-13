import React, { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import classes from "./Product.module.scss";

const Product = ({ className, data }) => {
  const [selected, setSelected] = useState(false);
  const [selectedSize, setSelectedSize] = useState(false);
  const handleClick = () => setSelected((prev) => !prev);
  const handleClickSize = () => setSelectedSize((prev) => !prev);
  return (
    <div className={classNames(classes["pizza"])}>
      <div className={classNames(classes["pizza__block"], className)}>
        <img
          className={classes["pizza__image"]}
          src={data.image}
          alt={data.name}
        />
        <h3 className={classes["pizza__title"]}>{data.name}</h3>
        <div className={classes["pizza__info"]}>
          <div className={classes["pizza__type"]}>
            <button
              onClick={handleClick}
              className={classNames(
                classes["pizza__type-item"],
                selected ? classes["pizza__type-item_select"] : ""
              )}
            >
              {data.types[0]}
            </button>
            <button
              onClick={handleClick}
              className={classNames(
                classes["pizza__type-item"],
                selected ? classes["pizza__type-item_select"] : ""
              )}
            >
              {data.types[1]}
            </button>
          </div>
          <div className={classes["pizza__size"]}>
            <button
              onClick={handleClickSize}
              className={classNames(
                classes["pizza__size-item"],
                selectedSize ? classes["pizza__size-item_selected"] : ""
              )}
            >
              {data.sizes[0]} см.
            </button>
            <button
              onClick={handleClickSize}
              className={classNames(
                classes["pizza__size-item"],
                selectedSize ? classes["pizza__size-item_selected"] : ""
              )}
            >
              {data.sizes[1]} см.
            </button>
            <button
              onClick={handleClickSize}
              className={classNames(
                classes["pizza__size-item"],
                selectedSize ? classes["pizza__size-item_selected"] : ""
              )}
            >
              {data.sizes[2]} см.
            </button>
          </div>
        </div>
        <div className={classes["pizza__items"]}>
          <p className={classes["pizza__price"]}>от {data.price} ₽</p>
          <button className={classNames(classes["pizza__button"])}>
            <FontAwesomeIcon
              className={classes["pizza__button-icon"]}
              icon={faPlus}
            />
            Добавить
            <p className={classes["pizza__button-count"]}>3</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
