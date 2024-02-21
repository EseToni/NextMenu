import React from "react";

import { IDish } from "@/common/types/IMenu";

import styles from "./dishes.module.scss";

const Dishes: React.FC<IDish> = ({
  nameDish,
  price,
  description,
  image,
  _id,
  allergens,
  labels,
  available,
}) => {
  return (
    <div className={styles.mainDishContainer}>
      <span>::</span>
      <div>
        <h4>{nameDish} - </h4>
        <span>{description}</span>
      </div>
      <h5>{price} $</h5>
      <img src={image} />
      <span> check</span>
      <span> :</span>
    </div>
  );
};

export default Dishes;
