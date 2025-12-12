export const PUBLIC_ROUTES = {
  HOME: '/',
  GAMES: '/games/',
  COMPANIES: '/companies/',
  COLLECTIONS: '/series/',
} as const;

export const GUEST_ONLY_ROUTES = {
  LOGIN: '/login/',
} as const;

export const AUTH_ONLY_ROUTES = {

} as const;

export const ENDPOINTS = {
  GAMES: 'games/',
  COLLECTIONS: 'collections/',
  COMPANIES: 'involved_companies/',
}

// URL сервера IGDB API
export const BASE_URL = "https://api.igdb.com/v4/"


