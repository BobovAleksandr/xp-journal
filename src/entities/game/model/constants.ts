import SteamIcon from './../ui/GameSiteLink/assets/icons/steam.svg'
import EgsIcon from './../ui/GameSiteLink/assets/icons/egs.svg'
import GogIcon from './../ui/GameSiteLink/assets/icons/gog.svg'
import WebIcon from './../ui/GameSiteLink/assets/icons/web.svg'
import DiscordIcon from './../ui/GameSiteLink/assets/icons/discord.svg'
import YoutubeIcon from './../ui/GameSiteLink/assets/icons/youtube.svg'
import TwitchIcon from './../ui/GameSiteLink/assets/icons/twitch.svg'
import notCompletedIcon from "@/shared/assets/xmark-shape.svg";
import inProgressIcon from "@/shared/assets/pause.svg";
import completedIcon from "@/shared/assets/check-shape.svg";
import platinumIcon from "@/shared/assets/medal.svg";
import toPlayIcon from "@/shared/assets/bookmark.svg";

export const USER_GAME_STATUSES = {
  toPlay: {
    value: 'Хочу пройти',
    icon: toPlayIcon,
  },
  completed: {
    value: 'Пройдена',
    icon: completedIcon,
  },
  platinum: {
    value: 'Платина',
    icon: platinumIcon,
  },
  notCompleted: {
    value: 'Не пройдена',
    icon: notCompletedIcon,
  },
  inProgress: {
    value: 'Не закончена',
    icon: inProgressIcon,
  },
} as const;

export const BEFORE_RELEASE_STATUSES: TUserGameStatusKey[] = [
  "notCompleted",
  "toPlay",
];

export const STATUS_KEYS = Object.keys(USER_GAME_STATUSES) as TUserGameStatusKey[]

export type TUserGameStatusKey = keyof typeof USER_GAME_STATUSES

export type TUserGameStatusValue = typeof USER_GAME_STATUSES[TUserGameStatusKey]

export const GAME_TYPE = {
  0: "Основная игра",
  1: "DLC",
  2: "Дополнение",
  3: "Сборник",
  4: "Отдельное дополнение",
  5: "Мод",
  6: "Эпизод",
  7: "Сезон",
  8: "Ремейк",
  11: "Порт",
  12: "Форк",
  14: "Обновление",
} as const;

export type TGameType = keyof typeof GAME_TYPE;

export const WEBSITE_TYPE = {
  1: { title: "Официальный сайт", icon: WebIcon },
  6: { title: "Twitch", icon: TwitchIcon },
  9: { title: "YouTube", icon: YoutubeIcon },
  13: { title: "Steam", icon: SteamIcon },
  16: { title: "Epic Games Store", icon: EgsIcon },
  17: { title: "GOG", icon: GogIcon },
  18: { title: "Discord", icon: DiscordIcon }
} as const;

export type TWebsiteType = keyof typeof WEBSITE_TYPE;

// Максимально возможный рейтинг для игр 
// Влияет на количество отображаемых звзд на странице игры
export const MAXIMUM_GAME_RATING = 10;
