import getGameBySlug from "@/shared/api/toIgdb/getGameBySlug";
import GameInfo from "@/widgets/GameInfo/GameInfo";
import GameTitle from "@/widgets/GameTitle/GameTitle";
import {
  WEBSITE_TYPE,
} from "@/entities/game/model/constants";
import calculateDaysToRelease from "@/shared/utils/calculateDaysToRelease";
import { TCompany } from "@/entities/game/model/types";
import Expansions from "@/widgets/Expansions/Expansions";
import { notFound } from "next/navigation";
import Screenshots from "@/widgets/Screenshots/Screenshots";
import Videos from "@/widgets/Videos/Videos";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;

  const game = await getGameBySlug(slug);
  if (!game) notFound();
  
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
    expansions,
    screenshots,
    videos
  } = game;

  const publishers: TCompany[] = companies ? companies.filter((c) => c.publisher).map((c) => c.company) : [];
  const developers: TCompany[] = companies ? companies.filter((c) => c.developer).map((c) => c.company) : [];
  const filteredWebsites = websites?.filter((site) => site.type && WEBSITE_TYPE[site.type]).sort((a, b) => a.type! - b.type!);

  const releaseStatus = releaseDate ? calculateDaysToRelease(releaseDate) : null;
  const isReleased = releaseStatus?.isReleased || false;
  const daysToRelease = releaseStatus?.daysToRelease || undefined;
  const sortedExpansions = expansions?.sort((a, b) => a.releaseDate! - b.releaseDate!) || [];

  return (
    <>
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
        id={id}
        isReleased={isReleased}
        daysToRelease={daysToRelease}
      />

      {expansions && 
        <Expansions expansions={sortedExpansions}
      />}

      {screenshots && screenshots.length > 0 && 
        <Screenshots screenshots={screenshots} gameName={name}
      />}

      {videos && videos.length > 0 && 
        <Videos videos={videos} 
      />}

    </>
  );
}
