"use client";

import React, { useState } from "react";

import { signIn, signOut } from "next-auth/react";

import UserApi from "@/common/utils/api/userApi";

import styles from "./section-login.module.scss";

const SectionLogin: React.FC<SectionLoginProps> = ({ tittle, type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    if (type === "register") {
      try {
        const response = await UserApi.registerUser({ name, email, password });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      try {
      } catch (error) {}
    } else if (type === "login") {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    }
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
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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

type SectionLoginProps = {
  tittle: string;
  children?: React.ReactNode;
  button?: React.ReactNode;
  type: "login" | "register";
};
