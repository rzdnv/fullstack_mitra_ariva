// src/hooks/useChangeUrl.ts
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useChangeUrl = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page") ?? "1";
  const currentLimit = searchParams.get("limit") ?? "10";
  const currentSearch = searchParams.get("search") ?? "";

  const setUrl = useCallback(
    (params: Record<string, string>) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          current.set(key, value);
        } else {
          current.delete(key);
        }
      });

      // Reset ke page 1 saat search berubah
      if (params.search !== undefined) {
        current.set("page", "1");
      }

      router.push(`${pathname}?${current.toString()}`);
    },
    [pathname, router, searchParams],
  );

  return {
    currentPage,
    currentLimit,
    currentSearch,
    setUrl,
  };
};

export default useChangeUrl;
