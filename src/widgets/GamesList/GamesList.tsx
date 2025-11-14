import styles from "./GamesList.module.scss";
import cn from "classnames";
import GameCard from "@/entities/game/ui/GameCard/GameCard";
import { TGameMainPage } from "@/entities/game/model/types";

type GamesListProps = {
  className?: string;
  games: TGameMainPage[];
};

const GamesList = ({ className, games }: GamesListProps) => {
  return (
    <ul className={cn(styles.gamesList, className)}>
      {games.map((game) => (
        <li key={game.id}>
          <GameCard image={game.cover} slug={game.slug} title={game.name} />
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
