"use client";

import React, { useState } from "react";

import MenuApi from "@/common/utils/api/menuApi";

import styles from "./modal.module.scss";

const ModalNewMenu: React.FC<ModalNewMenuProps> = ({ toggleModal }) => {
  const [nameValue, setNameValue] = useState("");

  const handleCreateMenu = () => {
    if (!nameValue) return;
    MenuApi.createMenu(nameValue);
    toggleModal();
  };

  return (
    <div className={styles.mainModalNewMenu}>
      <h2>Crear Nuevo Menú</h2>
      <label>
        Nombre del menú
        <input
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </label>
      <button onClick={handleCreateMenu}>Crear Menú</button>
    </div>
  );
};

export default ModalNewMenu;

interface ModalNewMenuProps {
  toggleModal: () => void;
}
