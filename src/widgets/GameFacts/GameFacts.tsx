import GameFact from "@/entities/game/ui/GameFact/GameFact";
import styles from "./GameFacts.module.scss";
import cn from "classnames";
import { TCompany, TFranchise } from "@/entities/game/model/types";
import convertDate from "@/shared/utils.ts/convertDate";
import { ROUTES } from "@/app/constants";

type GameFactsProps = {
  className?: string;
  releaseDate?: number;
  developer?: TCompany;
  publisher?: TCompany;
  franchise?: TFranchise;
};

const GameFacts = ({
  releaseDate,
  developer,
  publisher,
  franchise,
  className,
}: GameFactsProps) => {
  const todayDate = new Date();
  const releaseDateObj = releaseDate ? new Date(releaseDate * 1000) : null;

  const daysToRelease = releaseDateObj
    ? Math.ceil(
        (releaseDateObj.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24)
      )
    : null;

  const isReleased = daysToRelease !== null && daysToRelease <= 0;

  return (
    <div className={cn(styles.facts, className)}>
      {releaseDate && (
        <div className={cn(styles.facts_group, styles.facts_dates)}>
          {releaseDate && (
            <GameFact
              variant="text"
              title="Дата выхода"
              value={convertDate(releaseDate)}
            />
          )}
          {daysToRelease !== null && !isReleased && (
            <GameFact
              variant="text"
              title="Дней до выхода"
              value={String(daysToRelease)}
            />
          )}
        </div>
      )}
      {(developer || publisher) && (
        <div className={cn(styles.facts_group, styles.facts_companies)}>
          {developer && (
            <GameFact
              variant="link"
              title="Разработчик"
              value={developer.name}
              href={`${ROUTES.COMPANIES}${developer.slug}`}
            />
          )}
          {publisher && (
            <GameFact
              variant="link"
              title="Издатель"
              value={publisher.name}
              href={`${ROUTES.COMPANIES}${publisher.slug}`}
            />
          )}
        </div>
      )}
      {franchise && (
        <div className={cn(styles.facts_group, styles.facts_franchise)}>
          <GameFact
            variant="link"
            title="Франшиза"
            value={franchise.name}
            href={`${ROUTES.FRANCHISES}${franchise.slug}`}
          />
        </div>
      )}
    </div>
  );
};

export default GameFacts;
