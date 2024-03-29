"use client";

import React, { useState } from "react";

import CustomModal from "../modal/custom/CustomModal";
import ModalNewMenu from "../modal/ModalNewMenu";

const ButtonNewMenu: React.FC<ButtonNewMenuProps> = ({ idRestaurant }) => {
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <button onClick={toggleModal}>Nuevo Menu</button>

      <CustomModal modalState={modalState} toggleModal={toggleModal}>
        <ModalNewMenu toggleModal={toggleModal} idRestaurant={idRestaurant} />
      </CustomModal>
    </>
  );
};

interface ButtonNewMenuProps {
  idRestaurant: string;
}

export default ButtonNewMenu;
