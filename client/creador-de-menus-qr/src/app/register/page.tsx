import React from "react";
import Link from "next/link";

import styles from "./register.module.scss";

import NavBarLogin from "@/components/navbar/NavBarLogin";
import SectionLogin from "@/components/section-login/SectionLogin";

const Register = () => {
  return (
    <main className={styles.mainRegister}>
      <NavBarLogin>
        <div>
          <h3>¿Ya tienes cuenta?</h3>
          <Link href="/login">
            <button>Inicia sesión</button>
          </Link>
        </div>
      </NavBarLogin>
      <SectionLogin
        tittle="Regístrate en menuQR"
        type="register"
      ></SectionLogin>
    </main>
  );
};

export default Register;
