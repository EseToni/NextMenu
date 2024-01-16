import React from "react";

import styles from "./menus.module.scss";

import Dashborad from "../page";
import MenuTable from "@/components/menus-section/MenuTable";
import MenuItem from "@/components/menus-section/MenuItem";

const Menus = () => {
  return (
    <Dashborad>
      <div className={styles.mainMenus}>
        <div className={styles.infoMenu}>
          <h2>Menus</h2>
          <div>
            <button>Ver menu</button>
            <button>Nuevo menú</button>
          </div>
        </div>
        <hr />
        <MenuTable >
          <MenuItem
            name="Menu 1"
            dishes={5}
            availability="Todos los días"
            visibility={true}
          />
          <MenuItem
            name="Menu 2"
            dishes={2}
            availability="Todos los días"
            visibility={true}
          />
        </MenuTable>
      </div>
    </Dashborad>
  );
};

export default Menus;
