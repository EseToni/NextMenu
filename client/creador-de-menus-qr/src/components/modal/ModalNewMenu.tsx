"use client";

import React, { useState } from "react";

import { useSession } from "next-auth/react";

import MenuApi from "@/common/utils/api/menuApi";

import styles from "./modal.module.scss";

const ModalNewMenu: React.FC<ModalNewMenuProps> = ({ idRestaurant, toggleModal }) => {
  const [nameValue, setNameValue] = useState("");
  const [restaurantValue, setRestaurantValue] = useState("");
  const { data: session } = useSession();

  const handleCreateMenu = () => {
    if (!nameValue) return;
    MenuApi.createMenu(nameValue, session?.user?.id, idRestaurant);
    toggleModal();
  };
  const handleCreateRestaurant = () => {
    if (!restaurantValue) return;
    MenuApi.createRestaurant(restaurantValue, session?.user?.id);
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
      <div>
        <h2>Crear Restaurante</h2>
        <label>
          Nombre del Restaurante
          <input
            type="text"
            value={restaurantValue}
            onChange={(e) => setRestaurantValue(e.target.value)}
          />
        </label>
        <button onClick={handleCreateRestaurant}>Crear Restuarante</button>
      </div>
    </div>
  );
};

export default ModalNewMenu;

interface ModalNewMenuProps {
  idRestaurant: string;
  toggleModal: () => void;
}
