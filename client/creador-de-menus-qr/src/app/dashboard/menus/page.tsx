"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

import MenuApi from "@/common/utils/api/menuApi";

import Dashborad from "../page";

const MenuMain = () => {
    const router = useRouter();
    const session = getSession();

    useEffect(() => {
        if (!session) {
            router.push("/login");
        }
        else {
            session.then((res) => {
                MenuApi.getAllRestaurants(res?.user.id).then((res) => {
                    if (res.length === 0) {
                        router.push("/dashboard/restaurante");
                    }
                    else {
                        router.push(`/dashboard/menus/${res[0].idRestaurant}`);
                    }
                });
            })
        }
    }, [session, router]);
  return (
    <Dashborad>
        <h1>Holas</h1>
    </Dashborad>
  );
};

export default MenuMain;
