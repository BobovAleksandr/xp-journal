import styles from "./GamesList.module.scss";
import cn from "classnames";
import GameCard from "@/entities/game/ui/GameCard/GameCard";
import { TUserGameFull } from "@/entities/game/model/types";
import Accordion from "@/shared/components/Accordion/Accordion";
import { USER_GAME_STATUSES, STATUS_KEYS, TUserGameStatusKey } from "@/entities/game/model/constants";

type GamesListProps = {
  className?: string;
  games: TUserGameFull[];
};



const GamesList = ({ className, games }: GamesListProps) => {

  const SortedGamesByStatus = STATUS_KEYS.map(key => ({
  [key as TUserGameStatusKey]: games.filter(game => game.status === key)
}))

  // const mappedItems = STATUS_KEYS.map(key => ({
  //   title: USER_GAME_STATUSES[key].value,
  //   icon: USER_GAME_STATUSES[key].icon,
  //   content: <GameCard cover={SORTED_GAMES[key].cover} slug={game.slug} name={game.name} />,
  // }))

// id?: number | string;
// title: string;
// icon?: ComponentType<SVGProps<SVGSVGElement>>;
// content: ReactNode;

  return (
    // <Accordion className={cn(styles.gamesList, className)} items={games}>
    <></>
    // </Accordion>
  );
};

// <ul className={cn(styles.gamesList, className)}>
//   {games.map((game) => (
//     
//   ))}
// </ul>

export default GamesList;
