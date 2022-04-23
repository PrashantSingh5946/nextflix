import React from "react";
import { useRouter } from "next/router";

export default function useLogin() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const router = useRouter();
    if (token) {
      //token exists
      //validate token

      return true;
    } else {
      //redirect to /login
      router.replace("/login");
    }
  }

  return <div></div>;
}
