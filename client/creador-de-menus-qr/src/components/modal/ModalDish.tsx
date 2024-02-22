import React from "react";

import styles from "./modal.module.scss";

const ModalDish = () => {
  return (
    <div className={styles.mainModalDish}>
      <form>
        <div>
          <h3>Nuevo plato</h3>
        </div>
        <div className={styles.mainScrollable}>
          <div className={styles.formGrid}>
            <div className={styles.gridLeftCol}>
              <label>
                Nombre del plato
                <input type="text" />
              </label>
              <label>
                Descripcion
                <input type="text" />
              </label>
              <label>
                Precio
                <input type="text" />
              </label>
              <label>
                Etiquetas
                <input type="text" />
              </label>
              <label>
                Alergenos
                <input type="text" />
              </label>
            </div>
            <div>
                <h3>img</h3>
            </div>
          </div>
        </div>
        <div>
          <button>Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default ModalDish;
