import GameCover from "@/entities/game/ui/GameCover/GameCover";
import styles from "./GameInfo.module.scss";
import cn from "classnames";
import GameFacts from "../GameFacts/GameFacts";
import { TCompany, TFranchise } from "@/entities/game/model/types";

type GameInfoProps = {
  className?: string;
  cover: string;
  name: string;
  releaseDate?: number;
  developer?: TCompany;
  publisher?: TCompany;
  franchise?: TFranchise;
};

const GameInfo = ({
  cover,
  name,
  releaseDate,
  developer,
  publisher,
  franchise,
  className,
}: GameInfoProps) => {
  return (
    <section className={cn(styles.game_info, className)}>
      <GameCover 
        cover={cover}
        name={name}
        variant="gamePage"
      />
      <GameFacts
        releaseDate={releaseDate}
        developer={developer}
        publisher={publisher}
        franchise={franchise}
      />
    </section>
  );
};

export default GameInfo;
