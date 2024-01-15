"use client";

import React, { useState } from "react";

import { signIn, signOut } from "next-auth/react";

import styles from "./section-login.module.scss";

type SectionLoginProps = {
  tittle: string;
  children?: React.ReactNode;
  button?: React.ReactNode;
  type: "login" | "register";
};

const SectionLogin: React.FC<SectionLoginProps> = ({ tittle, type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  return (
    <section className={styles.sectionLogin}>
      <h3>{tittle}</h3>
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
        }
      >
        accede con google
      </button>
      <button onClick={() => signOut()}>sign out</button>
      <div>
        <hr />
        <span>O</span>
        <hr />
      </div>
      {type === "register" && (
        <label>
          Nombre
          <input type="text" />
        </label>
      )}
      <label>
        Correo electrónico
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        Contraseña
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <button onClick={handleLogin}>
        {type === "login" ? "Iniciar sesión" : "Registrate con tu email"}
      </button>
    </section>
  );
};

export default SectionLogin;
