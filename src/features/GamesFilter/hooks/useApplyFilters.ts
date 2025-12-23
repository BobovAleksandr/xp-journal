"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TGamesFilter } from "../model/types";

type TActiveFilter = {
  [K in keyof TGamesFilter]: string[];
};

export default function useApplyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (filterState: TGamesFilter) => {
    const activeFilter = Object.keys(filterState).reduce<TActiveFilter>((acc, groupKey) => {
      const k = groupKey as keyof TGamesFilter;
      const group = filterState[k];

      acc[k] = Object.keys(group).filter((itemKey) => {
        const ik = itemKey as keyof typeof group;
        return group[ik] === true;
      });

      return acc;
    }, {} as TActiveFilter);

    const urlParams = new URLSearchParams(searchParams);

    // очистить старые значения
    for (const k of Object.keys(filterState) as Array<keyof TGamesFilter>) {
      urlParams.delete(k);
    }

    // записать новые
    for (const k of Object.keys(activeFilter) as Array<keyof TActiveFilter>) {
      const values = activeFilter[k];
      if (values.length) urlParams.set(k, values.join(","));
    }

    const qs = urlParams.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };
}
