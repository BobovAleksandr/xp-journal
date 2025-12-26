import { DEFAULT_FILTER_STATE } from "../model/constants";
import { TGamesFilter } from "../model/types";

export function convertFilterToUrl(filterState: TGamesFilter): string {
  const urlParams = new URLSearchParams();

  for (const [key, values] of Object.entries(filterState)) {
    if (values.length) {
      urlParams.set(key, values.join(","));
    }
  }

  return urlParams.toString();
}

export function convertUrlToFilter(searchParams: { [key: string]: string | string[] | undefined }): TGamesFilter {
  const keys = Object.keys(DEFAULT_FILTER_STATE) as Array<keyof TGamesFilter>;
  return keys.reduce((acc, key) => {
    const value = searchParams[key as string];
    if (typeof value === 'string') {
      (acc[key] as string[]) = value.split(',');
    } else {
      (acc[key] as string[]) = [];
    }
    return acc;
  }, {} as TGamesFilter);
}

