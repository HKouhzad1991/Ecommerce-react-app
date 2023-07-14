import React from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";

const Products = () => {
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
          <h1>Our Feature Products</h1>
          <div className={css.Products}>
          <ul className={css.menu}></ul>
          </div>
    </div>
  );
};

export default Products;
