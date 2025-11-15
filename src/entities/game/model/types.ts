import { TGameType, TUserGameStatusKey, TWebsiteType } from "./constants";

export type TGameTwitch = {
  id: number;
  slug: string;
  name: string;
  cover?: TCover;
  first_release_date?: number;
  franchises?: TFranchise[];
  involved_companies: TInvolvedCompany[];
  screenshots: TScreenshot[];
  videos: TVideo[];
  websites: TWebsite[];
  game_type: TGameType;
  dlcs?: number[];
};

export type TGameUser = {
  id: number;
  slug: string;
  status: TUserGameStatusKey;
  cover: string;
  name: string;
  rating: number;
}

export type TGameClient = TGameTwitch & TGameUser

export type TCover = {
  id: number;
  image_id: string;
};

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

export type TScreenshot = {
  id: number;
  image_id: string;
};

export type TVideo = {
  id: number;
  video_id: string;
};

export type TWebsite = {
  id: number;
  url: string;
  type?: TWebsiteType;
};


