import getGameBySlug from "@/shared/api/getGameBySlug";
import styles from "./page.module.scss";
import cn from "classnames";
import GameInfo from "@/widgets/GameInfo/GameInfo";
import GameTitle from "@/widgets/GameTitle/GameTitle";

type GamePageProps = {
  className?: string;
  params: Promise<{ slug: string }>;
};

const GamePage = async ({ className, params }: GamePageProps) => {
  const { slug } = await params;

  const {
    game_type: type,
    name,
    cover,
    first_release_date: releaseDate,
    involved_companies,
    franchises
  } = await getGameBySlug(slug);

  const publisher = involved_companies.find((company) => company.publisher)?.company || undefined;
  const developer = involved_companies.find((company) => company.developer)?.company || undefined;
  const franchise = franchises?.[0] || undefined;

  console.log(`publisher - ${publisher?.slug}`);
  console.log(`developer - ${developer?.slug}`);

  return (
    <main className={cn(styles.main, className)}>
      <GameTitle name={name} type={type} />
      <GameInfo
        cover={cover?.image_id}
        name={name}
        releaseDate={releaseDate}
        developer={developer}
        publisher={publisher}
        franchise={franchise}
      />
    </main>
  );
};

export default GamePage;
