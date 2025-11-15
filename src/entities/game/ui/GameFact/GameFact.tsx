import CustomLink from "@/shared/components/CustomLink/CustomLink";
import styles from "./GameFact.module.scss";
import cn from "classnames";

type BaseFact = {
  value: string;
  title: string;
  className?: string;
};

type TextFact = BaseFact & {
  variant: "text";
};

type LinkFact = BaseFact & {
  variant: "link";
  href: string;
  isExternal?: boolean;
};

type GameFactProps = TextFact | LinkFact;

const GameFact = (props: GameFactProps) => {
  const { title, value, className } = props;

  return (
    <div className={cn(styles.game_fact, className)}>
      <span className={styles.game_fact__title}>{title}</span>
      {props.variant === "text" ? (
        <span className={styles.game_fact__value}>{value}</span>
      ) : (
        <CustomLink
          href={props.href}
          variant={props.isExternal ? "external" : "internal"}
        >
          {value}
        </CustomLink>
      )}
    </div>
  );
};

export default GameFact;
