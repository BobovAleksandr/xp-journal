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
    <div className={cn(styles.game_fact, className)}>
      <Span weight="semibold" className={styles.game_fact__title}>
        {title}
      </Span>
      <ul className={styles.game_fact__values}>
        
        {variant === "text" && (
          <>
            {Array.isArray(content) ? (
              content.map((text, index) => <li key={index}>{text}</li>)
            ) : (
              <li>{content}</li>
            )}
          </>
        )}

        {variant === "link" && (
          <>
            {Array.isArray(content) ? (
              content.map((link, index) => (
                <li key={index}>
                  <CustomLink {...link} />
                </li>
              ))
            ) : (
              <li>
                <CustomLink {...content} />
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default GameFact;

{
  /* {values.map((value, index) => (
  <li key={`${value.length + index}`}>
    {props.variant === "text" ? (
      <Span className={styles.game_fact__value}>{value}</Span>
    ) : (
      <CustomLink
        href={props.href}
        variant={props.isExternal ? "external" : "internal"}
      >
        {value}
      </CustomLink>
    )}
  </li>
))} */
}
