"use client"
import React from "react";
import { useRouter } from "next/navigation";

import styles from "./menu-item.module.scss";

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  availability,
  dishes,
  visibility,
  idRestaurant,
  idMenu,
}) => {
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/editor/${idRestaurant}/${idMenu}`);
  };
  return (
    <div className={styles.mainMenuItem} >
      <h4>{name}</h4>
      <button onClick={handleEdit}>Editar</button>
      <div>
        <h4>{dishes}</h4>
        <h4>{availability}</h4>
      </div>
      <div />
      <h4>YES</h4>
    </div>
  );
};

export default MenuItem;

interface MenuItemProps {
  name: string;
  dishes: number;
  availability: string;
  visibility: boolean;
  idRestaurant: string;
  idMenu: string;
}
