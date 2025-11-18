import GameFact from "@/entities/game/ui/GameFact/GameFact";
import styles from "./GameFacts.module.scss";
import cn from "classnames";
import { TCompany, TCollection } from "@/entities/game/model/types";
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
};

const GameFacts = ({
  releaseDate,
  developers,
  publishers,
  collection,
  className,
  isReleased,
  daysToRelease,
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

  return (
    <div className={cn(styles.facts, className)}>
      {releaseDate && (
        <div className={cn(styles.facts_group, styles.facts_dates)}>
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
        </div>
      )}

      {developers && developersLinks && (
        <div className={cn(styles.facts_group, styles.facts_developers)}>
          <GameFact
            variant="link"
            title={developersLinks.length > 1 ? "Разработчики" : "Разработчик"}
            content={developersLinks}
          />
        </div>
      )}

      {publishers && publishersLinks && (
        <div className={cn(styles.facts_group, styles.facts_publishers)}>
          <GameFact
            variant="link"
            title={publishersLinks.length > 1 ? "Издатели" : "Издатель"}
            content={publishersLinks}
          />
        </div>
      )}

      {collection && (
        <div className={cn(styles.facts_group, styles.facts_franchise)}>
          <GameFact
            variant="link"
            title="Серия"
            content={{
              children: collection.name,
              href: `${ROUTES.COLLECTIONS}${collection.slug}`,
              variant: "internal",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GameFacts;
