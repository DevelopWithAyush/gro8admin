import Header from "@/components/global/Header";
import AuthProvider from "@/provider/AuthProvider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <div className="flex flex-row items-start justify-start ">
      
        <div className="flex-1 flex flex-col items-start justify-start md:pl-[175px] pl-[0px]   ">
          <Header />
          <div className="w-full px-5 py-3 ">{children}</div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default layout;
