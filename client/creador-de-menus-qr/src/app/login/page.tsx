import React from "react";
import Link from "next/link";

import styles from "./login.module.scss";

import NavBarLogin from "@/components/navbar/NavBarLogin";
import SectionLogin from "@/components/section-login/SectionLogin";

const Login = () => {
  return (
    <main className={styles.mainLogin}>
      <NavBarLogin>
        <div>
          <h3>¿No tienes cuenta?</h3>
          <Link href="/register">
            <button>Regístrate</button>
          </Link>
        </div>
      </NavBarLogin>
      <SectionLogin tittle="Accede a menuQR" type="login"></SectionLogin>
    </main>
  );
};

export default Login;
