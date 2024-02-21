import React, { useState } from "react";

import MenuApi from "@/common/utils/api/menuApi";

import styles from "./modal.module.scss";

const ModalCategory: React.FC<ModalCategoryProps> = ({
  _idRestaurant,
  _idMenu,
  _idCategory,
}) => {
  const [nameCategory, setNameCategory] = useState("");
  const [description, setDescription] = useState("");

  const createCategory = async () => {
    const response = await MenuApi.createCategory(
      _idRestaurant,
      _idMenu,
      nameCategory,
      description
    );
    console.log(response);
  };
  const saveCategory = async () => {
    // rename and refactor category
  };

  const handleSave = async () => {
    if (!_idCategory) {
      await saveCategory();
    } else {
      await createCategory();
    }
  };
  return (
    <div className={styles.mainModalNewMenu}>
      <label>
        Nombre de la categoría
        <input
          type="text"
          onChange={(event) => setNameCategory(event.target.value)}
        />
      </label>
      <label>
        Descripción
        <textarea onChange={(event) => setDescription(event.target.value)} />
      </label>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

interface ModalCategoryProps {
  _idRestaurant: string;
  _idMenu: string;
  _idCategory?: string;
}

export default ModalCategory;
