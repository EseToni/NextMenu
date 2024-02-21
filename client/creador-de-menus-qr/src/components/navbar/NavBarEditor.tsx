import React from "react";

import styles from "./navbar.module.scss";

const NavBarMenu: React.FC<NavBarMenuProps> = ({ children }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <h3>{"<-"}</h3>
          <h3>ATRAS</h3>
        </div>
          <h3>MenusQR</h3>
      </nav>
      <div className={styles.children}>{children}</div>
    </>
  );
};

interface NavBarMenuProps {
  children?: React.ReactNode;
}

export default NavBarMenu;
