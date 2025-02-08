"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { reseAuthCookies } from "@/lib/actions";
import MenuLink from "./navbar/MenuLink";

interface Props {}

const LogoutButton: React.FC<Props> = () => {
  const router = useRouter();
  const submitLogout = async () => {
    reseAuthCookies();
    router.push("/");
  };
  return <MenuLink label="Log out" onClick={submitLogout} />;
};

export default LogoutButton;
