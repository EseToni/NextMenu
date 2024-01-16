import React from "react";

import styles from "./qr-section.module.scss";

const QRView = () => {
  return (
    <div className={styles.mainQRView}>
      <div style={{ width: "250px", height: "250px", background: "black" }} />
      <h4>Escanea el QR para ver el menú o haz click en este link:</h4>
      <a href="https://www.google.com">https://www.google.com</a>
    </div>
  );
};

export default QRView;
