import React from "react";

import styles from "./qr.module.scss";

import Dashborad from "../page";
import Popover from "@/atoms/Popover";
import QRDownload from "@/components/section-qr/QRDownload";
import QRView from "@/components/section-qr/QRView";

const QR = () => {
  return (
    <Dashborad>
      <div className={styles.mainQR}>
        <div className={styles.infoQR}>
          <h2>Codigo QR</h2>
          <Popover description="Tu codigo QR es el mismo para todos los menus y nunca cambiara." />
        </div>
        <hr />
        <div className={styles.sectionQR}>
          <QRDownload />
          <QRView />
        </div>
      </div>
    </Dashborad>
  );
};

export default QR;
