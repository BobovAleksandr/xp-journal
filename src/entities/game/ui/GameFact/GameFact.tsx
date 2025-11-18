import CustomLink, {
  TCustomLink,
} from "@/shared/components/CustomLink/CustomLink";
import styles from "./GameFact.module.scss";
import cn from "classnames";
import { Span } from "@/shared/components/Typography/Typography";

type BaseFact = {
  title: string;
  className?: string;
};

type TextFact = BaseFact & {
  variant: "text";
  content: string | string[];
};

type LinkFact = BaseFact & {
  variant: "link";
  content: TCustomLink | TCustomLink[];
};

type GameFactProps = TextFact | LinkFact;

const GameFact = (props: GameFactProps) => {
  const { title, content, className, variant } = props;

  return (
    <li className={cn(styles.game_fact, className)}>
      <Span weight="semibold" className={styles.game_fact__title}>
        {title}
      </Span>

      {Array.isArray(content) ? (
        <ul className={styles.game_fact__values}>
          {variant === "text"
            ? content.map((text, index) => <li key={index}>{text}</li>)
            : content.map((link, index) => (
                <li key={index}>
                  <CustomLink {...link} />
                </li>
              ))}
        </ul>
      ) : (
        <div className={styles.game_fact__single}>
          {variant === "text" ? content : <CustomLink {...content} />}
        </div>
      )}
    </li>
  );
};

export default GameFact;