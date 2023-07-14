import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
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
        <div className={css.list}>
          {MenuProducts.map((product, i) => (
            <div className={css.Product}>Products</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
