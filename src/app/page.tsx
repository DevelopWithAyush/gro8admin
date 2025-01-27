"use client"
import Login from "@/components/global/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        router.push("/dashboard");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default Page;
