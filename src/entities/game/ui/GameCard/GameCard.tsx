import { ROUTES } from "@/app/constants";
import styles from "./GameCard.module.scss";
import cn from "classnames";
import Link from "next/link";
import GameCover from "../GameCover/GameCover";

type GameCardProps = {
  className?: string;
  slug: string;
  cover: string;
  name: string;
};

const GameCard = ({ cover, slug, name, className }: GameCardProps) => {
  return (
    <Link
      href={`${ROUTES.GAMES}${slug}/`}
      className={cn(styles.card, className)}
      title={name}
    >
      <GameCover cover={cover} name={name} variant="mainPage" />
    </Link>
  );
};

export default GameCard;
