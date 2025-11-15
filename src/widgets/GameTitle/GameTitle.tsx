import { GAME_TYPE, TGameType } from "@/entities/game/model/constants";
import styles from "./GameTitle.module.scss";
import cn from "classnames";
import Chips from "@/shared/components/Chips/Chips";
import { H1 } from "@/shared/components/Typography/Typography";

type GameTitleProps = {
  className?: string;
  name: string;
  type: TGameType;
};

const GameTitle = ({ name, type, className }: GameTitleProps) => {
  return (
    <section className={cn(styles.game_title, className)}>
      <H1>{name}</H1>
      <Chips variant="outline">{GAME_TYPE[type]}</Chips>
    </section>
  );
};

export default GameTitle;
