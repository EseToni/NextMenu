import React from "react";

import styles from "./menus.module.scss";

import Dashborad from "../page";
import MenuTable from "@/components/menus-section/MenuTable";
import MenuItem from "@/components/menus-section/MenuItem";
import ButtonNewMenu from "@/components/buttons/ButtonNewMenu";

const Menus = () => {
  const MOCKDATA = [
    {
      name: "Menu 1",
      dishes: 5,
      availability: "Todos los días",
      visibility: true,
      position: 1,
    },
    {
      name: "Menu 2",
      dishes: 2,
      availability: "Todos los días",
      visibility: true,
      position: 2,
    },
  ];

  return (
    <Dashborad>
      <div className={styles.mainMenus}>
        <div className={styles.infoMenu}>
          <h2>Menus</h2>
          <div>
            <button>Ver menu</button>
            <ButtonNewMenu />
          </div>
        </div>
        <hr />
        <MenuTable>
          {MOCKDATA.map((item) => (
            <MenuItem
              key={item.position}
              name={item.name}
              dishes={item.dishes}
              availability={item.availability}
              visibility={item.visibility}
            />
          ))}
        </MenuTable>
      </div>
    </Dashborad>
  );
};

export default Menus;
