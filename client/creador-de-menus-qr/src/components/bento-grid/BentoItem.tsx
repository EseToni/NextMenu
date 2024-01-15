import React from "react";

import styles from "./bentoItem.module.scss";

import Image, { StaticImageData } from "next/image";

type BentoItemProps = {
  tittle: string;
  description: string;
  img: StaticImageData;
  customStyles: React.CSSProperties;
  customImgStyles?: React.CSSProperties;
};

const BentoItem: React.FC<BentoItemProps> = ({
  tittle,
  description,
  img,
  customStyles,
  customImgStyles,
}) => {
  return (
    <article className={styles.bentoItemMain} style={customStyles}>
      <Image
        src={img}
        alt={tittle}
        width={200}
        height={200}
        className={styles.img}
        style={customImgStyles}
      />
      <div className={styles.containerText}>
        <h2>{tittle}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.bgText} />
    </article>
  );
};

export default BentoItem;
