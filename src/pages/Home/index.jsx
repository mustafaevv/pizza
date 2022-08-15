import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import Container from "../../layout/Container";
import classes from "./Home.module.scss";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}`);
      const cards = await res.json();
      setData(cards);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Header />
      <Navbar />
      {data && (
        <div className={classes["pizza"]}>
          {data.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
