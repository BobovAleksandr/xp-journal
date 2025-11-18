export const ROUTES = {
  HOME: '/',
  GAMES: '/games/',
  COMPANIES: '/companies/',
  COLLECTIONS: '/series/',
} as const;

export const ENDPOINTS = {
  GAMES: 'games/'
}

// URL сервера IGDB API
export const BASE_URL = "https://api.igdb.com/v4/"

// Максимально возможный рейтинг для игр 
// Влияет на количество отображаемых звзд на странице игры
export const MAXIMUM_GAME_RATING = 10;