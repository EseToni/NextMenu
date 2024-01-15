import React from "react";
import styles from "./bentoGrid.module.scss";

import BentoItem from "./BentoItem";

import enlaceImg from "@/images/enlace.webp";
import multiidiomaImg from "@/images/multiidioma.webp";
import reviewImg from "@/images/review.webp";
import updateImg from "@/images/updated.webp";

const BentoGrid = () => {
  return (
    <section className={styles.bentoMain}>
      <BentoItem
        tittle="Un QR para todo"
        description="Crea tantos menús como desees. Todos ellos están conectados al mismo QR y tú decides cuáles se muestran y cuándo."
        img={enlaceImg}
        customStyles={{ gridColumn: "span 4 / span 4", paddingBottom: "100px" }}
        customImgStyles={{bottom: "0"}}
      />
      <BentoItem
        tittle="Actualiza tu menú en segundos, no días"
        description="Olvídate de imprimir nuevos menús o códigos QR cada vez que editas o añades nuevos platos. En NordQR todos los cambios se sincronizan instantáneamente con los QR de tus mesas."
        img={updateImg}
        customStyles={{ gridColumn: "span 6 / span 6" }}
        customImgStyles={{top: "0"}}
      />
      <BentoItem
        tittle="Recibe feedback"
        description="Ofrece a tus comensales la posibilidad de valorar su experiencia en tu restaurante. Tú decides si las valoraciones son privadas o visibles en el menú público."
        img={reviewImg}
        customStyles={{ gridColumn: "span 5 / span 5" }}
        customImgStyles={{top: "0", right:"-50px"}}
      />
      <BentoItem
        tittle="Multi-idioma"
        description="Pónselo fácil a tus clientes extranjeros ofreciendo tus menús en idiomas adicionales. Puedes añadir tantos como quieras. La función de traducción automática hace el trabajo duro por ti."
        img={multiidiomaImg}
        customStyles={{ gridColumn: "span 5 / span 5", paddingBottom: "50px"}}
        customImgStyles={{bottom: "0", right:"-50px"}}
      />

    </section>
  );
};

export default BentoGrid;
