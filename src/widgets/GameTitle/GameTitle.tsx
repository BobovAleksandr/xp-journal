import { GAME_STATUS, GAME_TYPE } from "@/entities/game/model/constants";
import styles from "./GameTitle.module.scss";
import cn from "classnames";
import Chips from "@/shared/components/Chips/Chips";
import { H1 } from "@/shared/components/Typography/Typography";
import { TGameClient } from "@/entities/game/model/types";

type TGameTitle = Pick<TGameClient, "name" | "gameType" | "gameStatus">;

type GameTitleProps = TGameTitle & {
  className?: string;
};

const GameTitle = ({ name, gameType, gameStatus, className }: GameTitleProps) => {
  return (
    <section className={cn(styles.game_title, className)}>
      <H1>{name}</H1>
      <ul className={styles.chipses}>
        {GAME_TYPE[gameType] && (
          <Chips variant="outline">{GAME_TYPE[gameType]}</Chips>
        )}
        {GAME_STATUS[gameStatus] && (
          <Chips variant="outline">{GAME_STATUS[gameStatus]}</Chips>
        )}
      </ul>
    </section>
  );
};

export default GameTitle;
