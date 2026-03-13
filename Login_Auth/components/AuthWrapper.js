"use client";

import { useSession } from "next-auth/react";

export default function AuthWrapper({ children }) {

  const { status } = useSession();

  if (status === "loading") {
    return null;
  }

  return <>{children}</>;
}