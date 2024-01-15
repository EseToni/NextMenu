import React from "react";

import styles from "./menu-table.module.scss";

const MenuTable: React.FC<MenuTableProps> = ({ children }) => {
  return (
    <section className={styles.mainMenuTable}>
      <div className={styles.menuTableInfo}>
        <h4>NOMBRE</h4>
        <div/>
        <div>
          <h4>PLATOS</h4>
          <h4>DISPOBIBILIDAD</h4>
        </div>
        <div/>
        <h4>VISIBILIDAD</h4>
      </div>
      <hr />
      {children}
    </section>
  );
};

export default MenuTable;

type MenuTableProps = {
  children?: React.ReactNode;
};
