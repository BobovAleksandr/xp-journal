import GameCover from "@/entities/game/ui/GameCover/GameCover";
import styles from "./GameInfo.module.scss";
import cn from "classnames";
import GameFacts from "../GameFacts/GameFacts";
import {
  TClientCover,
  TCompany,
  TCollection,
  TWebsite,
  TPltaform,
  TGenre,
} from "@/entities/game/model/types";
import GameSiteLinks from "../GameSiteLinks/GameSiteLinks";
import { TUserGameStatusKey } from "@/entities/game/model/constants";
import GameControls from "../GameControls/GameControls";

type GameInfoProps = {
  className?: string;
  cover?: TClientCover;
  name: string;
  releaseDate?: number;
  developers?: TCompany[];
  publishers?: TCompany[];
  collection?: TCollection;
  websites?: TWebsite[];
  rating: number;
  status: TUserGameStatusKey;
  inCollection: boolean;
  isReleased: boolean;
  daysToRelease?: number;
  platforms: TPltaform[];
  genres: TGenre[];
};

const GameInfo = ({
  cover,
  name,
  releaseDate,
  developers,
  publishers,
  collection,
  className,
  websites,
  rating,
  status,
  inCollection,
  isReleased,
  daysToRelease,
  platforms,
  genres,
}: GameInfoProps) => {
  return (
    <section className={cn(styles.game_content, className)}>
      <GameCover cover={cover?.imageId} name={name} variant="gamePage" />
      <div className={styles.game_info}>
        <GameFacts
          releaseDate={releaseDate}
          isReleased={isReleased}
          daysToRelease={daysToRelease}
          developers={developers}
          publishers={publishers}
          collection={collection}
          platforms={platforms}
          genres={genres}
        />
        <div className={styles.game_interactives}>
          <GameControls
            isReleased={isReleased}
            rating={rating}
            status={status}
            inCollection={inCollection}
          />
          {websites && websites.length > 0 && (
            <GameSiteLinks gameSites={websites} />
          )}
        </div>
      </div>
    </section>
  );
};

export default GameInfo;
