import React from "react";
import styles from "./navbar.module.scss";

type NavBarLoginProps = {
  children?: React.ReactNode;
};

const NavBarLogin: React.FC<NavBarLoginProps> = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <div>
        <h3>MenusQR</h3>
      </div>
      <div className={styles.children}>
        {children}
      </div>
    </nav>
  );
};

export default NavBarLogin;
