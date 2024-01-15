"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { getSession, SessionContextValue } from "next-auth/react";

import Spinner from "@/atoms/Spinner";

const AtomButtons = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<SessionContextValue["data"] | null>(null);

  useEffect(() => {
    getSession().then((session) => {
      setUser(session);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner style={{width: "25px", height: "25px"}} />
      ) : user ? (
        <p>{user.user?.email}</p>
      ) : (
        <>
          <Link href="/login">
            <button>Inicia sesión</button>
          </Link>
          <Link href="/register">
            <button>Registrarse</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AtomButtons;
