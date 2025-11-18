import GameFact from "@/entities/game/ui/GameFact/GameFact";
import styles from "./GameFacts.module.scss";
import cn from "classnames";
import {
  TCompany,
  TCollection,
  TPltaform,
  TGenre,
} from "@/entities/game/model/types";
import convertDate from "@/shared/utils.ts/convertDate";
import { ROUTES } from "@/app/constants";

type GameFactsProps = {
  className?: string;
  releaseDate?: number;
  developers?: TCompany[];
  publishers?: TCompany[];
  collection?: TCollection;
  isReleased: boolean;
  daysToRelease?: number;
  platforms: TPltaform[];
  genres: TGenre[];
};

const GameFacts = ({
  releaseDate,
  developers,
  publishers,
  collection,
  className,
  isReleased,
  daysToRelease,
  platforms,
  genres,
}: GameFactsProps) => {

  const developersLinks = developers?.map((dev) => ({
    children: dev.name,
    href: `${ROUTES.COMPANIES}${dev.slug}`,
    variant: "internal" as const,
  }));

  const publishersLinks = publishers?.map((pub) => ({
    children: pub.name,
    href: `${ROUTES.COMPANIES}${pub.slug}`,
    variant: "internal" as const,
  }));

  const genresStringArray = genres?.map(genre => genre.name)
  const platformsStringArray = platforms?.map(platform => platform.name)

  return (
    <div className={cn(styles.facts, className)}>
      <ul className={styles.facts_group}>
        {releaseDate && (
          <GameFact
            variant="text"
            title="Дата выхода"
            content={convertDate(releaseDate)}
          />
        )}
        {daysToRelease && !isReleased && (
          <GameFact
            variant="text"
            title="Дней до выхода"
            content={String(daysToRelease)}
          />
        )}

        {developers && developersLinks && (
          <GameFact
            variant="link"
            title={developersLinks.length > 1 ? "Разработчики" : "Разработчик"}
            content={developersLinks}
          />
        )}

        {publishers && publishersLinks && (
          <GameFact
            variant="link"
            title={publishersLinks.length > 1 ? "Издатели" : "Издатель"}
            content={publishersLinks}
          />
        )}

        {collection && (
          <GameFact
            variant="link"
            title="Серия"
            content={{
              children: collection.name,
              href: `${ROUTES.COLLECTIONS}${collection.slug}`,
              variant: "internal",
            }}
          />
        )}
      </ul>

      
        <ul className={cn(styles.facts_group, styles.facts_group__second)}>

        {platforms && platformsStringArray && (
          <GameFact
            variant="text"
            title={platformsStringArray.length > 1 ? "Платформы" : "Платформа"}
            content={platformsStringArray}
          />
        )}

        {genres && genresStringArray && (
          <GameFact
            variant="text"
            title={genresStringArray.length > 1 ? "Жанры" : "Жанр"}
            content={genresStringArray}
          />
        )}

      </ul>
    </div>
  );
};

export default GameFacts;
