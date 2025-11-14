import GamesList from "@/widgets/GamesList/GamesList";
import { userHoleinthehead } from "./mock/mockUserData";
import getUserGames from "@/shared/api/getUserGames";

// TODO - Грузим юзера из авторизации
const games = await getUserGames(userHoleinthehead)

export default function Home() {
  return <main>
    <GamesList games={games} />
  </main>;
}
