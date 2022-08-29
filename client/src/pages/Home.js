import React, { useEffect, useState } from "react";
import {
  About,
  Category,
  Gallery,
  FindUs,
  Intro,
  TopProducts,
} from "../container";

import "../App.css";
import "../container/SignUp/SignUp.css";
import "../components/NewsLetter/NewsLetter.css";
import Newsletter from "../components/NewsLetter/NewsLetter";
import { findMyOrder, getProduct } from "../methods/getData";

const Home = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProduct();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Intro />
      <About />
      <Category />
      <TopProducts data={data} />
      <Gallery />
      <Newsletter />
      <FindUs />
    </div>
  );
};

export default Home;
