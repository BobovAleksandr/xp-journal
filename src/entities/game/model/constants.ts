export const USER_GAME_STATUSES = {
  notCompleted: 'Не пройдена',
  inProgress: 'Не закончена',
  completed: 'Пройдена',
  platinum: 'Платина',
  toPlay: 'Хочу пройти'
} as const;

export type TUserGameStatusKey = keyof typeof USER_GAME_STATUSES

export type TUserGameStatusValue = typeof USER_GAME_STATUSES[TUserGameStatusKey]

export const GAME_TYPE = {
  0: "Основная игра",
  1: "DLC",
  2: "Дополнение",
  3: "Сборник",
  4: "Отдельное дополнение",
} as const;

export type TGameType = keyof typeof GAME_TYPE;

export const WEBSITE_CATEGORY = {
  1: "Официальный сайт",
  5: "GOG",
  13: "Steam",
  26: "Epic Games Store",
} as const;

export type TWebsiteCategory = keyof typeof WEBSITE_CATEGORY;