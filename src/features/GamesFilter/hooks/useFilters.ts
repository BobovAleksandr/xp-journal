'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { TGamesFilter } from '../model/types';
import { convertFilterToUrl, convertUrlToFilter } from '../actions/convertParams';
import { DEFAULT_FILTER_STATE } from '../model/constants';
import { useEffect, useState } from 'react';

export default function useFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filterState, setFilterState] = useState<TGamesFilter>(DEFAULT_FILTER_STATE);

  useEffect(() => {
    const paramsObj = Object.fromEntries(searchParams.entries());
    const newFilter = convertUrlToFilter(paramsObj);
    setFilterState(newFilter);
  }, [searchParams]);

  const apply = () => {
    const params = convertFilterToUrl(filterState);
    router.push(`${pathname}?${params}`);
  };

  const reset = () => {
    const params = convertFilterToUrl(DEFAULT_FILTER_STATE);
    router.push(`${pathname}?${params}`);
  };

  return { apply, reset, state: filterState, setState: setFilterState };
}
