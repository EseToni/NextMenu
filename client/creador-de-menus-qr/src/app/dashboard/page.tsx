import React from "react";
import { SessionProviderCustom } from "@/common/providers/SessionProviderCustom";

import styles from "./dashborad.module.scss";

import NavBarMenu from "@/components/navbar-menu/NavBarMenu";

const Dashborad = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.mainDashboard}>
      <SessionProviderCustom>
        <NavBarMenu />
        {children}
      </SessionProviderCustom>
    </main>
  );
};

export default Dashborad;
