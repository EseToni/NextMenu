import React from "react";

import styles from "./qr.module.scss";

import Dashborad from "../page";
import Popover from "@/atoms/Popover";

const page = () => {
  return (
    <Dashborad>
      <div className={styles.mainQR}>
        <h1>QR</h1>
        <Popover description="Tu codigo QR es el mismo para todos los menus y nunca cambiara." />
      </div>
    </Dashborad>
  );
};

export default page;
