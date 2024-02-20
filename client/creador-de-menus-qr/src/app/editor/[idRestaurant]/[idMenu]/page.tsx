"use client";

import React from "react";

import { useParams } from "next/navigation";

const MenuId = () => {
  const { idRestaurant, idMenu} = useParams();

  console.log(idRestaurant, idMenu);

  return <div>soy una ruta</div>;
};

export default MenuId;
