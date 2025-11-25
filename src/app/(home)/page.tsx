import GamesList from "@/widgets/GamesList/GamesList";
import getUserGames from "@/shared/api/toDb/getUserGames";
import getGamesForMain from "@/shared/api/toIgdb/getGamesForMain";
import getCurrentSession from "@/features/Auth/getCurrentSession";
import { cookies } from "next/headers";
import { TUserGameFull } from "@/entities/game/model/types";

export default async function Home() {
  const currentCookies = (await cookies()).toString();
  const session = await getCurrentSession(currentCookies);

  const userId = session?.user.id;
  if (!userId) return null;

  const userGames = await getUserGames(userId);

  const userGamesIds = userGames.map((game) => game.id);

  const mainPageGames = (await getGamesForMain(userGamesIds)) ?? [];

  const userGamesWithStatus: TUserGameFull[] = mainPageGames.map(game => ({
    ...game,
    status: userGames[game.id].status,
    rating: userGames[game.id].rating,
  }))

  return <GamesList games={userGamesWithStatus} />;
}
