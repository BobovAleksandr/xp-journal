import SteamIcon from './../ui/GameSiteLink/assets/icons/steam.svg'
import EgsIcon from './../ui/GameSiteLink/assets/icons/egs.svg'
import GogIcon from './../ui/GameSiteLink/assets/icons/gog.svg'
import WebIcon from './../ui/GameSiteLink/assets/icons/web.svg'
import DiscordIcon from './../ui/GameSiteLink/assets/icons/discord.svg'
import YoutubeIcon from './../ui/GameSiteLink/assets/icons/youtube.svg'
import TwitchIcon from './../ui/GameSiteLink/assets/icons/twitch.svg'

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

export const WEBSITE_TYPE = {
  1:  { title: "Официальный сайт", icon: WebIcon },
  6:  { title: "Twitch", icon: TwitchIcon },
  9:  { title: "YouTube", icon: YoutubeIcon },
  13: { title: "Steam", icon: SteamIcon },
  16: { title: "Epic Games Store", icon: EgsIcon },
  17: { title: "GOG", icon: GogIcon },
  18: { title: "Discord", icon: DiscordIcon }
} as const;


export type TWebsiteType = keyof typeof WEBSITE_TYPE;
