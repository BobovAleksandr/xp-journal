import getGameBySlug from "@/shared/api/toIgdb/getGameBySlug";
import styles from "./page.module.scss";
import cn from "classnames";
import GameInfo from "@/widgets/GameInfo/GameInfo";
import GameTitle from "@/widgets/GameTitle/GameTitle";
import { TUserGameStatusKey, WEBSITE_TYPE } from "@/entities/game/model/constants";
import { getUserGameById } from "@/shared/api/toDb/getUserGameById";
import calculateDaysToRelease from "@/shared/utils/calculateDaysToRelease";
import { TCompany } from "@/entities/game/model/types";

type GamePageProps = {
  className?: string;
  params: Promise<{ slug: string }>;
};

export default async function GamePage({ className, params }: GamePageProps) {  const { slug } = await params;

  const {
    id,
    gameType,
    name,
    cover,
    releaseDate,
    companies,
    collection,
    websites,
    genres,
    platforms,
  } = await getGameBySlug(slug);

  const userGame = await getUserGameById(id);

  const publishers: TCompany[] = companies.filter(c => c.publisher).map(c => c.company);
  const developers: TCompany[] = companies.filter(c => c.developer).map(c => c.company);
  const filteredWebsites = websites.filter(site => site.type && WEBSITE_TYPE[site.type]).sort((a, b) => a.type! - b.type!);
  const rating = userGame?.rating || 0
  const status = userGame?.status || "notCompleted" satisfies TUserGameStatusKey
  const inCollection = !!userGame

  const releaseStatus = releaseDate ? calculateDaysToRelease(releaseDate) : null

  const isReleased = releaseStatus?.isReleased || false
  const daysToRelease = releaseStatus?.daysToRelease || undefined

  return (
    <main className={cn(styles.main, className)}>
      <GameTitle name={name} gameType={gameType} />
      <GameInfo
        genres={genres}
        platforms={platforms}
        cover={cover}
        name={name}
        releaseDate={releaseDate}
        developers={developers}
        publishers={publishers}
        collection={collection}
        websites={filteredWebsites}
        rating={rating}
        status={status}
        inCollection={inCollection}
        isReleased={isReleased}
        daysToRelease={daysToRelease}
      />
    </main>
  );
};

