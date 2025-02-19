import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const usePaths = () => {
  const pathname = usePathname();

  return useMemo(() => {
    if (!pathname) return { pathname: "", page: "" };

    const path = pathname.split("/");
    const page = path[path.length - 1] || "";

    return { pathname, page };
  }, [pathname]);
};
