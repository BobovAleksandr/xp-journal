import {
  TClientImage,
  TGameClient,
  TGameIgdb,
  TIgdbImage
} from "@/entities/game/model/types";

export type TIgdbCompany = {
  id: number;
  country: number;
  created_at: number;
  logo: TIgdbImage;
  name: string;
}

export type TClientCompany = Omit<TIgdbCompany, "created_at" | "logo"> & {
  createdAt: number;
  logo: TClientImage;
}

type TCompanyStatuses = {
  developer: boolean;
  publisher: boolean;
}

export type TIgdbCompanyGame =
  Pick<TGameIgdb, "name" | "id" | "cover" | "slug">
  & TCompanyStatuses

export type TClientCompanyGame =
  Pick<TGameClient, "name" | "id" | "cover" | "slug">
  & TCompanyStatuses