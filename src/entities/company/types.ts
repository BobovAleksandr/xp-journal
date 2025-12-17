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
  parent?: {
    id: number;
    name: string;
    slug: string;
  }
  status: TCompanyStatus;
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

export const COMPANY_STATUSES = {
  0: "Действующая",
  1: "Закрыта",
  2: "Объединена",
  3: "Переименована",
} as const;

export type TCompanyStatus = keyof typeof COMPANY_STATUSES;