import SearchInput from "@/shared/components/SearchInput/SearchInput";
import styles from "./Header.module.scss";
import cn from "classnames";
import Logo from "@/shared/components/Logo/Logo";
import LoginBlock from "@/features/Auth/ui/LoginBlock/LoginBlock";
import { memo } from "react";
import getCurrentSession from "@/features/Auth/getCurrentSession";
import { cookies } from "next/headers";
import GamesFilter from "@/features/GamesFilter/ui/GamesFilter/GamesFilter";

type HeaderProps = {
  className?: string;
};

const Header = async ({ className }: HeaderProps) => {

  const currentCookies = (await cookies()).toString();
  const user = (await getCurrentSession(currentCookies))?.user;

  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.hedaer_wrapper}>
        <Logo />
        <div className={styles.filters}>
          <SearchInput />
          <GamesFilter />
          <LoginBlock user={user} />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
