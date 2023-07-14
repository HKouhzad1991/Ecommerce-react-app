import React from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

const Products = () => {
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products 2023</h1>
      <div className={css.Products}>
        <ul className={css.menu}>
          <li>All</li>
          <li>Skin Care</li>
          <li>Conditioners</li>
          <li>Foundations</li>
              </ul>
              <div className={css.list}></div>

      </div>
    </div>
  );
};

export default Products;
