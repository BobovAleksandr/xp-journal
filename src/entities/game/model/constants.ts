export const USER_GAME_STATUSES = {
  notCompleted: 'Не пройдена',
  inProgress: 'Не закончена',
  completed: 'Пройдена',
  platinum: 'Платина',
  toPlay: 'Хочу пройти'
} as const;

export type TUserGameStatusKey = keyof typeof USER_GAME_STATUSES

export type TUserGameStatusValue = typeof USER_GAME_STATUSES[TUserGameStatusKey]