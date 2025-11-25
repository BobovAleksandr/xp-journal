import { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";

type HeadingTag = "h1" | "h2" | "h3";
type TextTag = "p" | "span";

type Weight = "regular" | "semibold";
type Size = "s" | "m";

type HeadingProps = HTMLAttributes<HTMLHeadElement> & {
  tag: HeadingTag;
};

type TextProps = (HTMLAttributes<HTMLSpanElement> | HTMLAttributes<HTMLParagraphElement>) & {
  tag: TextTag;
  children: ReactNode;
  className?: string;
  weight?: Weight;
  size?: Size;
};

type TypographyProps = HeadingProps | TextProps;

const Typography = ({ tag, children, className, ...rest }: TypographyProps) => {
  const Tag = tag as HeadingTag | TextTag;

  return (
    <Tag className={cn(className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;

type TypographyHelperProps = {
  size?: Size;
  weight?: Weight;
  children: ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: TypographyHelperProps) => (
  <Typography tag="h1" className={cn(styles.h1, className)}>
    {children}
  </Typography>
);

export const H2 = ({ children, className }: TypographyHelperProps) => (
  <Typography tag="h2" className={cn(styles.h2, className)}>
    {children}
  </Typography>
);

export const H3 = ({ children, className }: TypographyHelperProps) => (
  <Typography tag="h3" className={cn(styles.h3, className)}>
    {children}
  </Typography>
);

export const P = ({ children, className, size = "m", weight = "regular" }: TypographyHelperProps) => (
  <Typography tag="p" className={cn(styles.p, styles[size], styles[weight], className)} size={size} weight={weight}>{children}</Typography>
);

export const Span = ({ children, className, size = "m", weight = "regular" }: TypographyHelperProps) => (
  <Typography tag="span" className={cn(styles.span, styles[size], styles[weight], className)} size={size} weight={weight}>{children}</Typography>
);