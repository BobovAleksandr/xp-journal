import { GAME_TYPE } from "@/entities/game/model/constants";
import styles from "./GameTitle.module.scss";
import cn from "classnames";
import Chips from "@/shared/components/Chips/Chips";
import { H1 } from "@/shared/components/Typography/Typography";
import { TGameClient } from "@/entities/game/model/types";

type TGameTitle = Pick<TGameClient, "name" | "gameType">;

type GameTitleProps = TGameTitle & {
  className?: string;
};

const GameTitle = ({ name, gameType, className }: GameTitleProps) => {
  return (
    <section className={cn(styles.game_title, className)}>
      <H1>{name}</H1>
      <Chips variant="outline">{GAME_TYPE[gameType]}</Chips>
    </section>
  );
};

export default GameTitle;
