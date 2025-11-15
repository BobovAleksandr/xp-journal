import Link from "next/link";
import styles from "./Logo.module.scss";
import cn from "classnames";
import { ROUTES } from "@/app/constants";
import Image from "next/image";
import { Span } from "@/shared/components/Typography/Typography";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={ROUTES.HOME} className={cn(styles.logo, className)}>
      <Image
        priority
        alt="Логотип XP Journal"
        src="/images/logo.png"
        width={38}
        height={38}
      />
      <Span className={styles.logo_text}>XP Journal</Span>
    </Link>
  );
};

export default Logo;
