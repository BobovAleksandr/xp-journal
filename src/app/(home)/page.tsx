import GamesList from "@/widgets/GamesList/GamesList";
import getUserGames from "@/shared/api/toDb/getUserGames";
import getGamesForMain from "@/shared/api/toIgdb/getGamesForMain";
import getCurrentSession from "@/features/Auth/getCurrentSession";
import { cookies } from "next/headers";

export default async function Home() {
  const currentCookies = (await cookies()).toString();
  const session = await getCurrentSession(currentCookies);

  const userId = session?.user.id;
  if (!userId) return null;

  // Игры пользователя с сервера
  const userGames = await getUserGames(userId);

  // Словарь игр пользователя
  const userGamesMap = new Map(userGames.map((ug) => [ug.id, ug]));

  // Id игр пользователя
  const userGamesIds = userGames.map((game) => game.id);

  // Игры для отображения на странице c IGDB
  const mainPageGames = (await getGamesForMain(userGamesIds)) ?? [];


  const userGamesFull = mainPageGames.map((game) => {
    const userGame = userGamesMap.get(game.id);

    return {
      ...game,
      status: userGame?.status ?? "notCompleted",
      rating: userGame?.rating ?? 0,
    };
  });

  return <GamesList games={userGamesFull} />;
}
