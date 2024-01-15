import React from "react";

import styles from "./dashborad.module.scss";

import NavBarMenu from "@/components/navbar-menu/NavBarMenu";

const Dashborad = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.mainDashboard}>
      <NavBarMenu />
      {children}
    </main>
  );
};

export default Dashborad;
