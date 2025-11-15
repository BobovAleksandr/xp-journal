import Link from "next/link";
import styles from "./GameSiteLink.module.scss";
import cn from "classnames";
import { TWebsite } from "@/entities/game/model/types";
import { WEBSITE_TYPE } from "@/entities/game/model/constants";

type GameSiteLinkProps = {
  website: TWebsite;
  className?: string;
};

const GameSiteLink = ({ website, className }: GameSiteLinkProps) => {
  const type = website.type || 1; // 1 - тип просто вебсайта
  const Icon = WEBSITE_TYPE[type].icon;
  return (
    <Link
      className={cn(styles.game_site_link, className)}
      rel="noopener noreferrer"
      target="_blank"
      href={website.url}
      title={WEBSITE_TYPE[type].title}
    >
      <Icon height={32} className={styles.game_site_icon}/>
    </Link>
  );
};

export default GameSiteLink;
