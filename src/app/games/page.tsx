import GamesList from "@/widgets/GamesList/GamesList";
import getUserGames from "@/shared/api/toDb/getUserGames";
import getGamesForMain from "@/shared/api/toIgdb/getGamesForMain";
import getCurrentSession from "@/features/Auth/getCurrentSession";
import { cookies } from "next/headers";
import { convertUrlToFilter } from "@/features/GamesFilter/actions/convertParams";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const currentCookies = (await cookies()).toString();
  const session = await getCurrentSession(currentCookies);

  const filters = convertUrlToFilter(params);

  const userId = session?.user.id;
  if (!userId) return null;

  // Игры пользователя с сервера
  const userGames = await getUserGames(userId, filters.gameStatus);

  // Словарь игр пользователя
  const userGamesMap = new Map(userGames.map((ug) => [ug.id, ug]));

  // Id игр пользователя
  const userGamesIds = userGames.map((game) => game.id);

  // Игры для отображения на странице c IGDB
  const mainPageGames = (await getGamesForMain(userGamesIds, filters.gameType)) ?? [];

  // Комбинируем данные с БД и IGDB для отображения на странице
  const userGamesFull = mainPageGames.map((game) => {
    const userGame = userGamesMap.get(game.id);

    return {
      ...game,
      status: userGame?.status ?? "notCompleted",
      rating: userGame?.rating ?? 0,
    };
  });

  // Сортируем игры по имени
  const userGamesFullSortedByname = [...userGamesFull].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return <GamesList games={userGamesFullSortedByname} />;
}
