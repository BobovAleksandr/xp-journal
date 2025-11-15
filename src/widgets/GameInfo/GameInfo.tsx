import GameCover from "@/entities/game/ui/GameCover/GameCover";
import styles from "./GameInfo.module.scss";
import cn from "classnames";
import GameFacts from "../GameFacts/GameFacts";
import { TCompany, TFranchise, TWebsite } from "@/entities/game/model/types";
import GameSiteLinks from "../GameSiteLinks/GameSiteLinks";

type GameInfoProps = {
  className?: string;
  cover?: string;
  name: string;
  releaseDate?: number;
  developer?: TCompany;
  publisher?: TCompany;
  franchise?: TFranchise;
  websites?: TWebsite[];
};

const GameInfo = ({
  cover,
  name,
  releaseDate,
  developer,
  publisher,
  franchise,
  className,
  websites,
}: GameInfoProps) => {
  return (
    <section className={cn(styles.game_info, className)}>
      <GameCover cover={cover} name={name} variant="gamePage" />
      <div className={styles.game_description}>
        <GameFacts
        releaseDate={releaseDate}
        developer={developer}
        publisher={publisher}
        franchise={franchise}
      />
      {websites && websites.length > 0 && (
        <GameSiteLinks gameSites={websites} />
      )}
      </div>
    </section>
  );
};

export default GameInfo;
