import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import useGetData from "../../hooks/useGetData";
import Container from "../../layout/Container";

import classes from "./Home.module.scss";

const Home = () => {
  const [data] = useGetData('/');

  return (
    <Container>
      <Header />
      <Navbar />
      <main>
        {data && (
          <div className={classes["pizza"]}>
            {data.map((item) => (
              <Product key={item.id} data={item} />
            ))}
          </div>
        )}
      </main>
    </Container>
  );
};

export default Home;
