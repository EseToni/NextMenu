import React from "react";

import styles from "./navbar.module.scss";

import AtomButtons from "./AtomButtons";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <h3>MenusQR</h3>
      </div>
      <div>
        <h3>Precios</h3>
        <h3>Novedades</h3>
        <h3>Contacto</h3>
      </div>
      <AtomButtons />
    </nav>
  );
};

export default NavBar;
