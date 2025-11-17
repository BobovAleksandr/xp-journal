import styles from "./GamesList.module.scss";
import cn from "classnames";
import GameCard from "@/entities/game/ui/GameCard/GameCard";
import { TClientGamesForMain } from "@/entities/game/model/types";

type GamesListProps = {
  className?: string;
  games: TClientGamesForMain[];
};

const GamesList = ({ className, games }: GamesListProps) => {
  return (
    <ul className={cn(styles.gamesList, className)}>
      {games.map((game) => (
        <li key={game.id}>
          <GameCard cover={game.cover?.imageId} slug={game.slug} name={game.name} />
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
