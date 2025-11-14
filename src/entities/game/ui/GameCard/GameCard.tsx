import { ROUTES } from "@/app/constants";
import styles from "./GameCard.module.scss";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { TCover } from "@/entities/game/model/types";
import { buildImageUrl } from "@/shared/utils.ts/buildImageUrl";

type GameCardProps = {
  className?: string;
  slug: string;
  image: TCover;
  title: string;
};

const GameCard = ({ image, slug, title, className }: GameCardProps) => {
  return (
    <Link
      href={`${ROUTES.GAMES}${slug}/`}
      className={cn(styles.card, className)}
      title={title}
    >
      <Image
        className={styles.card__image}
        src={buildImageUrl(image.image_id, "cover_big")}
        width={220}
        height={300}
        alt={title}
      />
    </Link>
  );
};

export default GameCard;
