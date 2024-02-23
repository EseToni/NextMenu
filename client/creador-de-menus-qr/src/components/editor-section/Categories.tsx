"use client";

import React, { useState } from "react";

import styles from "./categories.module.scss";
import CustomModal from "../modal/custom/CustomModal";
import ModalCategory from "../modal/ModalCategory";
import ModalDish from "../modal/ModalDish";

const Categories: React.FC<CategoriesProps> = ({
  children,
  categoryName,
  numDishes,
  _idCategory,
  _idMenu,
  _idRestaurant,
}) => {
  const [open, setOpen] = useState(true);
  const [modalCategory, setmodalCategory] = useState(false);
  const [modalDish, setmodalDish] = useState(false);

  const toggleModalCategory = () => {
    setmodalCategory(!modalCategory);
  };
  const toggleModalDish = () => {
    setmodalDish(!modalDish);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return open ? (
    <>
      <div className={styles.mainCategoryOpen}>
        <div className={styles.categoryInfoOpen}>
          <div className={styles.categoryNameHeader}>
            <h3>{categoryName}</h3>
            <div className={styles.line1} />
          </div>
          <div className={styles.categoryButtonHeader}>
            <button>{"->"}</button>
            <button onClick={handleOpen}>Contraer</button>
            <button> ... </button>
          </div>
          <div className={styles.line2} />
        </div>
        <div className={styles.mainContainerChildren}>
          {children}
          <div className={styles.containerButtons}>
            <button onClick={toggleModalDish}>Nuevo plato</button>
            <button onClick={toggleModalCategory}>Nueva categoria</button>
          </div>
        </div>
      </div>
      <CustomModal modalState={modalCategory} toggleModal={toggleModalCategory}>
        <ModalCategory
          _idCategory={_idCategory}
          _idMenu={_idMenu}
          _idRestaurant={_idRestaurant}
        />
      </CustomModal>
      <CustomModal modalState={modalDish} toggleModal={toggleModalDish}>
        <ModalDish
          idCategory={_idCategory}
          idMenu={_idMenu}
          idRestaurant={_idRestaurant}
        />
      </CustomModal>
    </>
  ) : (
    <div className={styles.mainCategoryClose}>
      <div>
        <h3>{categoryName}</h3>
        <h5>
          {numDishes} {numDishes > 1 ? "plato" : "platos"}
        </h5>
      </div>
      <div>
        <button>{"->"}</button>
        <button onClick={handleOpen}>Expandir</button>
        <button> ... </button>
      </div>
    </div>
  );
};

interface CategoriesProps {
  children?: React.ReactNode;
  _idCategory: string;
  _idMenu: string;
  _idRestaurant: string;
  categoryName: string;
  numDishes: number;
}

export default Categories;
