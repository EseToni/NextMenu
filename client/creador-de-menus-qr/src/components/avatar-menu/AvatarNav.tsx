"use client";

import React, { useState, useEffect } from "react";

import { getSession, SessionContextValue, useSession } from "next-auth/react";

import styles from "./avatar.module.scss";

import Spinner from "@/atoms/Spinner";
import AvatarDropDown from "./AvatarDropDown";

const AvatarNav = () => {
  const { data: session } = useSession();

  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    if (!session) return;
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={styles.mainAvatarNav} onClick={handleShowDropDown}>
      {!session ? (
        <Spinner style={{ width: "25px", height: "25px" }} />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session?.user?.image || "@/images/avatar.png"}
            alt="avatar"
          />
          <p>{session?.user?.name?.split(" ").splice(0, 2).join(" ")}</p>
        </>
      )}
      {showDropDown && (
        <AvatarDropDown
          img={session?.user?.image || "@/images/avatar.png"}
          name={session?.user?.name?.split(" ").splice(0, 2).join(" ") || "Nombre"}
          email={session?.user?.email || "Email"}
        />
      )}
    </div>
  );
};

export default React.memo(AvatarNav);
