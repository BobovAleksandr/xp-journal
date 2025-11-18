import Link from "next/link";
import styles from "./CustomLink.module.scss";
import cn from "classnames";
import ExtrnalIcon from "@/shared/assets/external-link.svg";
import InternalIcon from "@/shared/assets/link.svg";

export type TCustomLink = {
  children: string;
  href: string;
  variant: "internal" | "external";
}

type CustomLinkProps = TCustomLink & {
  className?: string;
};

const CustomLink = ({
  children,
  href,
  variant = "internal",
  className,
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={cn(styles.link, className)}
      target={variant === "external" ? "_blank" : ""}
    >
      {variant === "external" ? (
        <ExtrnalIcon width={16} height={16} />
      ) : (
        <InternalIcon width={16} height={16} />
      )}
      {children}
    </Link>
  );
};

export default CustomLink;
