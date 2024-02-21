"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import MenuApi from "@/common/utils/api/menuApi";

import styles from "./menus-editor.module.scss";
import { IMenu } from "@/common/types/IMenu";

import NavBarEditor from "@/components/navbar/NavBarEditor";
import Categories from "@/components/editor-section/Categories";
import Dishes from "@/components/editor-section/Dishes";

const MenuId = () => {
  const [menu, setMenu] = useState<IMenu | null>(null);
  const { idRestaurant, idMenu } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await MenuApi.getMenu(
        idRestaurant as string,
        idMenu as string
      );
      setMenu(response);
    };
    fetchMenu();
  }, [idRestaurant, idMenu]);

  console.log(menu);

  return (
    <NavBarEditor>
      <div className={styles.mainMenuEditor}>
        <div className={styles.menuContainer}>
          <div className={styles.menuEditorInfo}>
            <p>Icon</p>
            <h3>{menu?.nameMenu}</h3>
          </div>
          <section className={styles.categoriesContainer}>
          {
            menu?.categories.map((category) => (
              <Categories
                key={category._id}
                _idCategory={category._id}
                _idRestaurant={idRestaurant as string}
                _idMenu={idMenu as string}
                numDishes={category.dishes.length}
                categoryName={category.nameCategory}
              >
                {category.dishes.map((dish) => (
                  <Dishes
                    key={dish._id}
                    _id={dish._id}
                    nameDish={dish.nameDish}
                    price={dish.price}
                    description={dish.description}
                    image={dish.image}
                    available={dish.available}
                    allergens={dish.allergens}
                    labels={dish.labels}
                  />
                ))}
              </Categories>
            ))
          }
          </section>
        </div>
      </div>
    </NavBarEditor>
  );
};

export default MenuId;
