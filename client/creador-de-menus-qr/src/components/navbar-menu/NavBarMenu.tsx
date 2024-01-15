import React from "react";

import Link from "next/link";

import styles from "./navbar-menu.module.scss";

const NavBarMenu = () => {
  return (
    <nav className={styles.mainNavBarMenu}>
      <h3>MenusQR</h3>

      <div>
        <Link href="/dashboard/menus">
          <div>
            <h4>X</h4>
            <h3>Menus</h3>
          </div>
        </Link>

        <Link href="/dashboard">
          <div>
            <h4>X</h4>
            <h3>Codigo QR</h3>
          </div>
        </Link>

        <Link href="/dashboard">
          <div>
            <h4>X</h4>
            <h3>Estadisticas</h3>
          </div>
        </Link>

        <Link href="/dashboard">
          <div>
            <h4>X</h4>
            <h3>Configuracion</h3>
          </div>
        </Link>
      </div>

      <div>
        <h3>Mejora tu plan</h3>
      </div>
    </nav>
  );
};

export default NavBarMenu;
