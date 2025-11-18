import GamesList from "@/widgets/GamesList/GamesList";
import getUserGames from "@/shared/api/toDb/getUserGames";
import getGamesForMain from "@/shared/api/toIgdb/getGamesForMain";
import { auth } from "../../auth";
import { cookies } from "next/headers";

// TODO - Грузим юзера из авторизации

export default async function Home() {
  const currentCookies = (await cookies()).toString();

  const session = await auth.api.getSession({
    headers: {
      cookie: currentCookies,
    },
  });

  const userId = session?.user.id;
  if (!userId) return <div>SOSI</div>;
  const userGames = await getUserGames(userId);
  const userGamesIds = userGames.map((game) => game.id);
  const mainPageGames = await getGamesForMain(userGamesIds);

  return (
    <main>
      <GamesList games={mainPageGames} />
    </main>
  );
}
