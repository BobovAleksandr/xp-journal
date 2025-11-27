import styles from "./GamesList.module.scss";
import cn from "classnames";
import GameCard from "@/entities/game/ui/GameCard/GameCard";
import { TUserGameFull } from "@/entities/game/model/types";
import {
  USER_GAME_STATUSES,
  STATUS_KEYS,
  TUserGameStatusKey,
} from "@/entities/game/model/constants";
import AccordionItem from "@/shared/components/AccordeonItem/AccordionItem";

type GamesListProps = {
  className?: string;
  games: TUserGameFull[];
};

const GamesList = ({ className, games }: GamesListProps) => {

  const sortedGamesByStatus: Record<TUserGameStatusKey, TUserGameFull[]> =
    games.reduce((acc, game) => {
      if (!acc[game.status]) {
        acc[game.status] = [];
      }
      acc[game.status].push(game);
      return acc;
    }, {} as Record<TUserGameStatusKey, TUserGameFull[]>);

  return (
    <ul className={cn(styles.gamesSection, className)}>
      {STATUS_KEYS.map(status => (
        <AccordionItem
          key={status}
          title={USER_GAME_STATUSES[status].value}
        >
          <ul className={styles.gamesList}>
            {sortedGamesByStatus[status] &&
              sortedGamesByStatus[status].map((game) => (
                  <li key={game.id}>
                    <GameCard
                      slug={game.slug}
                      cover={game.cover?.imageId}
                      name={game.name}
                    />
                  </li>
                ))}
          </ul>
        </AccordionItem>
      ))}
    </ul>
  );
};

export default GamesList;
