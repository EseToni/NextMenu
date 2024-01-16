"use client";

import React from "react";

import { useParams } from "next/navigation";

const MenuId = () => {
  const { id } = useParams();

  console.log(id);

  return <div>soy una ruta</div>;
};

export default MenuId;
