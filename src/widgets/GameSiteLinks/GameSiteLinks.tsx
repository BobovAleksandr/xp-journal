import { TWebsite } from "@/entities/game/model/types";
import styles from "./GameSiteLinks.module.scss";
import cn from "classnames";
import GameSiteLink from "@/entities/game/ui/GameSiteLink/GameSiteLink";

type GameSiteLinksProps = {
  gameSites: TWebsite[];
  className?: string;
};

const GameSiteLinks = ({ gameSites, className }: GameSiteLinksProps) => {
  return (
    <ul className={cn(styles.game_site_links_list, className)}>
      {gameSites.map((site) => (
        <li key={site.id}>
          <GameSiteLink website={site} />
        </li>
      ))}
    </ul>
  );
};

export default GameSiteLinks;
