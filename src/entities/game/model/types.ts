import { TGameType, TUserGameStatusKey, TWebsiteType } from "./constants";

// Тип данных игры с IGDB
export type TGameIgdb = {
  id: number;
  slug: string;
  name: string;
  cover?: TIgdbCover;
  first_release_date?: number;
  franchises?: TFranchise[];
  involved_companies: TInvolvedCompany[];
  screenshots: TIgdbScreenshot[];
  videos: TIgdbVideo[];
  websites: TWebsite[];
  game_type: TGameType;
  dlcs?: number[];
};

// Тип данных игры в проекте
export type TGameClient = Omit<TGameIgdb, "first_release_date" | "involved_companies" | "game_type" | "cover" | "screenshots" | "videos"> & {
  releaseDate?: number;
  companies: TInvolvedCompany[];
  gameType: TGameType;
  cover?: TClientCover;
  screenshots: TClientScreenshot[];
  videos: TClientVideo[];
}

// Тип данных игры пользователя из БД
export type TGameUser = {
  id: number;
  status: TUserGameStatusKey;
  rating: number;
}

// Тип данных игр для главной страницы с IGDB
export type TIgdbGamesForMain = Pick<TGameIgdb, "id" | "name" | "cover" | "slug">

// Тип данных игр для главной страницы для клиента
export type TClientGamesForMain = Pick<TGameClient, "id" | "name" | "cover" | "slug">

export type TIgdbCover = {
  id: number;
  image_id: string;
};

export type TClientCover = Omit<TIgdbCover, "image_id"> & {
  imageId: string;
}

export type TFranchise = {
  slug: string;
  name: string;
};

export type TCompany = {
  name: string;
  slug: string;
};

export type TInvolvedCompany = {
  company: TCompany;
  developer: boolean;
  publisher: boolean;
};

export type TIgdbScreenshot = {
  id: number;
  image_id: string;
};

export type TClientScreenshot = Omit<TIgdbScreenshot, "image_id"> & {
  imageId: string;
}

export type TIgdbVideo = {
  id: number;
  video_id: string;
};

export type TClientVideo = Omit<TIgdbVideo, "video_id"> & {
  videoId: string;
};

export type TWebsite = {
  id: number;
  url: string;
  type?: TWebsiteType;
};


