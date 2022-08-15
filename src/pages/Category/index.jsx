import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Container from "../../layout/Container";

import classes from "./Category.module.scss";

const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API}?category=${type}`);
      const card = await res.json();
      setData(card);
    };
    fetchData();
  }, [type]);
  return (
    <>
      <Container>
        <Header />
        <Navbar />
        <div className={classes["pizza-content"]}>
          {data &&
            data.map((card) => (
              <Product
                key={card.id}
                data={card}
                className={classes["pizzaItem"]}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default Category;
