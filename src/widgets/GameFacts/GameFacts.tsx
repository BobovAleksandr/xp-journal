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
  isReleased: boolean;
  daysToRelease?: number;
};

const GameFacts = ({
  releaseDate,
  developer,
  publisher,
  franchise,
  className,
  isReleased,
  daysToRelease,
}: GameFactsProps) => {
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
          {daysToRelease && !isReleased && (
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
