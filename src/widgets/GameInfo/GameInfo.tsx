import GameCover from "@/entities/game/ui/GameCover/GameCover";
import styles from "./GameInfo.module.scss";
import cn from "classnames";
import GameFacts from "../GameFacts/GameFacts";
import {
  TClientImage,
  TCompany,
  TCollection,
  TWebsite,
  TPltaform,
  TGenre,
} from "@/entities/game/model/types";
import GameSiteLinks from "../GameSiteLinks/GameSiteLinks";
import { TUserGameStatusKey } from "@/entities/game/model/constants";
import GameControls from "../GameControls/GameControls";
import { cookies } from "next/headers";
import getCurrentSession from "@/features/Auth/getCurrentSession";
import { getUserGameById } from "@/shared/api/toDb/getUserGameById";

type GameInfoProps = {
  id: number;
  className?: string;
  cover?: TClientImage;
  name: string;
  releaseDate?: number;
  developers?: TCompany[];
  publishers?: TCompany[];
  collection?: TCollection;
  websites?: TWebsite[];
  isReleased: boolean;
  daysToRelease?: number;
  platforms: TPltaform[];
  genres: TGenre[];
};

const GameInfo = async ({
  cover,
  name,
  releaseDate,
  developers,
  publishers,
  collection,
  className,
  websites,
  id,
  isReleased,
  daysToRelease,
  platforms,
  genres,
}: GameInfoProps) => {
  const currentCookies = (await cookies()).toString();
  const session = await getCurrentSession(currentCookies);
  const userId = session?.user.id;

  const userGame = userId ? await getUserGameById(userId, id) : null;

  const rating = userGame?.rating || 0;
  const status =
    userGame?.status || ("notCompleted" satisfies TUserGameStatusKey);
  const inCollection = !!userGame;

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
          {userId && (
            <GameControls
              isReleased={isReleased}
              rating={rating}
              status={status}
              inCollection={inCollection}
              userId={userId}
              gameId={id}
            />
          )}
          {websites && websites.length > 0 && (
            <GameSiteLinks
              gameSites={websites}
              className={styles.game_websites}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default GameInfo;
