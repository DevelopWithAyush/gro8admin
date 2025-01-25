"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-[#3F3F44] text-[14px] font-rubik-regular_400  flex flex-row items-center justify-start group "
    >
      <ChevronLeft className="w-[16px] text-[#0061FE] group-hover:translate-x-[-5px] transition-all duration-300 ease-in-out  " />{" "}
      Back
    </button>
  );
}
