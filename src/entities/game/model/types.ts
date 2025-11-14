import { TUserGameStatusKey } from "./constants";

export type TGameTwitch = {
  id: number;
  slug: string;
  name: string;
  cover: TCover;
  first_release_date: number;
  franchises: TFranchise[];
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

export type TWebsiteCategory = 
  | 1   // Official
  | 5   // GOG
  | 13  // Steam
  | 26; // Epic Games Store

export type TGameType = 
  | 0  // Main game
  | 1  // DLC/Addon
  | 2  // Expansion
  | 3  // Bundle
  | 4; // Standalone expansion

export type TCover = {
  id: number;
  image_id: string;
};

export type TFranchise = {
  id: number;
  name: string;
};

export type TCompany = {
  id: number;
  name: string;
  slug: string;
};

export type TInvolvedCompany = {
  id: number;
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
  category?: TWebsiteCategory;
};


