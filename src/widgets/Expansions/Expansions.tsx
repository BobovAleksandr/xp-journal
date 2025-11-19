import PageSection from "@/shared/components/PageSection/PageSection";
import styles from "./Expansions.module.scss";
import { TClientExpansion } from "@/entities/game/model/types";
import GameCard from "@/entities/game/ui/GameCard/GameCard";

type ExpansionsProps = {
  expansions: TClientExpansion[];
};

const Expansions = ({ expansions }: ExpansionsProps) => {
  return (
    <PageSection heading="Дополнения">
      <ul className={styles.expansions}>
        {expansions.map((exp) => (
          <li key={exp.id}>
            <GameCard
              name={exp.name}
              slug={exp.slug}
              cover={exp.cover.imageId}
            />
          </li>
        ))}
      </ul>
    </PageSection>
  );
};

export default Expansions;
