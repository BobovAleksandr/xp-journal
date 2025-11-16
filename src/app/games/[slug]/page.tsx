import getGameBySlug from "@/shared/api/getGameBySlug";
import styles from "./page.module.scss";
import cn from "classnames";
import GameInfo from "@/widgets/GameInfo/GameInfo";
import GameTitle from "@/widgets/GameTitle/GameTitle";
import { TUserGameStatusKey, WEBSITE_TYPE } from "@/entities/game/model/constants";
import { getUserGameBySlug } from "@/shared/api/getUserGameBySlug";
import calculateDaysToRelease from "@/shared/utils.ts/calculateDaysToRelease";

type GamePageProps = {
  className?: string;
  params: Promise<{ slug: string }>;
};

const GamePage = async ({ className, params }: GamePageProps) => {
  const { slug } = await params;

  const {
    gameType,
    name,
    cover,
    releaseDate,
    companies,
    franchises,
    websites
  } = await getGameBySlug(slug);

  const userGame = await getUserGameBySlug(slug);

  const publisher = companies.find((company) => company.publisher)?.company || undefined;
  const developer = companies.find((company) => company.developer)?.company || undefined;
  const franchise = franchises?.[0] || undefined;
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
        cover={cover}
        name={name}
        releaseDate={releaseDate}
        developer={developer}
        publisher={publisher}
        franchise={franchise}
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

export default GamePage;
