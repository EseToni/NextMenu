"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import MenuApi from "@/common/utils/api/menuApi";

import styles from "./menus.module.scss";

import Dashborad from "../../page";
import MenuTable from "@/components/menus-section/MenuTable";
import MenuItem from "@/components/menus-section/MenuItem";
import ButtonNewMenu from "@/components/buttons/ButtonNewMenu";

const Menus = () => {
  const MOCKDATA = [
    {
      nameMenu: "Menu 1",
      dishes: 5,
      available: "Todos los días",
      visibility: true,
      position: 1,
      idMenu: "1",
    },
    {
      nameMenu: "Menu 2",
      dishes: 2,
      available: "Todos los días",
      visibility: true,
      position: 2,
      idMenu: "2",
    },
  ];
  const [menus, setMenus] = useState(MOCKDATA);

  const { idRestaurant }: { idRestaurant: string } = useParams();
  useEffect(() => {
    MenuApi.getRestaurant(idRestaurant).then((res) => {
      setMenus(res.menus);
    });
  }, [idRestaurant]);

  return (
    <Dashborad>
      <div className={styles.mainMenus}>
        <div className={styles.infoMenu}>
          <h2>Menus</h2>
          <div>
            <button>Ver menu</button>
            <ButtonNewMenu idRestaurant={idRestaurant} />
          </div>
        </div>
        <hr />
        {menus.length > 0 ? (
          <MenuTable>
            {menus.length > 0 &&
              menus.map((menu) => (
                <MenuItem
                  idRestaurant={idRestaurant}
                  idMenu={menu.idMenu}
                  key={menu.position}
                  name={menu.nameMenu}
                  dishes={menu.dishes}
                  availability={menu.available}
                  visibility={menu.visibility}
                />
              ))}
          </MenuTable>
        ) : (
          <h1>No hay menus</h1>
        )}
      </div>
    </Dashborad>
  );
};

export default Menus;
