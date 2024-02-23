import React, { useState } from "react";

import { IDish } from "@/common/types/IMenu";
import MenuApi from "@/common/utils/api/menuApi";
import styles from "./modal.module.scss";

const ModalDish: React.FC<ModalDishProps> = ({
  idRestaurant,
  idMenu,
  idCategory,
}) => {
  const [dish, setDish] = useState<IDish>({
    nameDish: "",
    price: 0,
    description: "",
    available: false,
    allergens: [],
    labels: [],
    image: "",
  });
  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDish({ ...dish, [e.target.id]: e.target.value });
  };
  const handleSaveDish = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await MenuApi.createDish(
      idRestaurant,
      idMenu,
      idCategory,
      dish
    );
    console.log(res);
  };
  return (
    <div className={styles.mainModalDish}>
      <form>
        <div>
          <h3>Nuevo plato</h3>
        </div>
        <div className={styles.mainScrollable}>
          <div className={styles.formGrid}>
            <div className={styles.gridLeftCol}>
              <label form="nameDish">
                Nombre del plato
                <input
                  type="text"
                  value={dish.nameDish}
                  id="nameDish"
                  onChange={(e) => handleSetValue(e)}
                />
              </label>
              <label form="description">
                Descripcion
                <input
                  type="text"
                  value={dish.description}
                  id="description"
                  onChange={(e) => handleSetValue(e)}
                />
              </label>
              <label form="price">
                Precio
                <input
                  type="text"
                  value={dish.price}
                  id="price"
                  onChange={(e) => handleSetValue(e)}
                />
              </label>
              <label form="labels">
                Etiquetas
                <input type="text" />
              </label>
              <label>
                Alergenos
                <input type="text" />
              </label>
            </div>
            <div>
              <h3>img</h3>
            </div>
          </div>
        </div>
        <div>
          <button onClick={(e) => handleSaveDish(e)}>Guardar</button>
        </div>
      </form>
    </div>
  );
};

interface ModalDishProps {
  idRestaurant: string;
  idMenu: string;
  idCategory: string;
}

export default ModalDish;
