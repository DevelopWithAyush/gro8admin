"use client";

import { usePaths } from "@/hooks/user-nav";
import React from "react";

const Page = () => {
  const { page, pathname } = usePaths();
  console.log(page, pathname);
  return (
    <div className="">
      {page} {pathname}
    </div>
  );
};

export default Page;
