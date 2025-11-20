"use server";

import styles from "./page.module.scss";
import getGamesByCollection from "@/shared/api/toIgdb/getGamesByCollection";
import PageSection from "@/shared/components/PageSection/PageSection";
import { H1 } from "@/shared/components/Typography/Typography";
import GameCard from "@/entities/game/ui/GameCard/GameCard";
import { notFound } from "next/navigation";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function SeriesPage({ params }: GamePageProps) {
  const { slug } = await params;
  const collection = await getGamesByCollection(slug);

  if (!collection) {
    notFound();
  }

  return (
    <>
      <H1>{`Игры серии ${collection.name}`}</H1>
      <PageSection>
        <ul className={styles.games_list}>
          {collection.games.map((game) => (
            <li key={game.id}>
              <GameCard
                name={game.name}
                slug={game.slug}
                cover={game.cover?.imageId}
              />
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
