import { buildImageUrl } from "@/shared/utils.ts/buildImageUrl";
import styles from "./GameCover.module.scss";
import cn from "classnames";
import Image from "next/image";

const COVER_CONFIG = {
  mainPage: { width: 220, height: 300, urlVariant: "cover_big" },
  gamePage: { width: 464, height: 633, urlVariant: "cover_big_2x" },
} as const;

type Variant = keyof typeof COVER_CONFIG;

type GameCoverProps = {
  className?: string;
  variant: Variant;
  name: string;
  cover?: string;
};

const GameCover = ({ name, cover, className, variant }: GameCoverProps) => {
  const { width, height, urlVariant } = COVER_CONFIG[variant];
  return (
    <Image
      className={cn(styles.image, className)}
      src={
        cover
          ? buildImageUrl(cover, urlVariant)
          : "/images/Image-error-placeholder.jpg"
      }
      width={width}
      height={height}
      alt={name}
      priority={variant === "gamePage"}
    />
  );
};

export default GameCover;
