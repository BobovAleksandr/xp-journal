import GamesList from "@/widgets/GamesList/GamesList";
import getUserGames from "@/shared/api/getUserGames";

// TODO - Грузим юзера из авторизации
const games = await getUserGames(1);

export default function Home() {
  return <main>
    <GamesList games={games} />
  </main>;
}
