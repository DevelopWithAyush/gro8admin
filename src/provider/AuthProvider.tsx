// components/AuthProvider.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the auth token exists in localStorage
    const token = localStorage.getItem("authToken");

    if (!token) {
      // If the token does not exist, redirect the user to the login page
      router.push("/"); // Adjust the redirect path as needed
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthProvider;
