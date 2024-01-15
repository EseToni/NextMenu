import React from "react";

import { signOut } from "next-auth/react";

import styles from "./avatar.module.scss";

const AvatarDropDown: React.FC<AvatarDropDownProps> = ({
  img,
  name,
  email,
}) => {
  return (
    <div className={styles.mainAvatarDropDown}>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="avatar" />
        <section>
          <h3>{name}</h3>
          <p>restaurante</p>
        </section>
        <p>Dueño</p>
      </div>

      <hr />
      <section>
        <h3>CUENTA</h3>
        <h4>Mi perfil</h4>
      </section>
      <hr />

      <section>
        <h3>RESTAURANTE</h3>
        <h4>Usuarios</h4>
        <h4>Añade un restaurante</h4>
        <h4>Plan y facturación</h4>
      </section>
      <hr />

      <section>
        <h3>AYUDA</h3>
        <h4>Centro de ayuda</h4>
        <h4>Dejar feedback</h4>
      </section>
      <hr />

      <button onClick={() => signOut()}>Salir</button>
    </div>
  );
};

export default React.memo(AvatarDropDown);

interface AvatarDropDownProps {
  img: string;
  name: string;
  email: string;
}
