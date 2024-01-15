import React from "react";

import styles from "./atoms.module.scss";

type SpinnerProps = {
  style?: React.CSSProperties;
};

const Spinner: React.FC<SpinnerProps> = ({ style }) => {
  return (
    <div className={styles.spinnerContainer} style={style}>
      <div className={styles.spinner} style={style} />
    </div>
  );
};

export default Spinner;
