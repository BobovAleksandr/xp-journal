import GamesList from "@/widgets/GamesList/GamesList";
import getUserGames from "@/shared/api/toDb/getUserGames";
import getGamesForMain from "@/shared/api/toIgdb/getGamesForMain";

// TODO - Грузим юзера из авторизации
const userGames = await getUserGames(1);
const userGamesIds = userGames.map(game => game.id)
const mainPageGames = await getGamesForMain(userGamesIds)

export default function Home() {
  return <main>
    <GamesList games={mainPageGames} />
  </main>;
}
