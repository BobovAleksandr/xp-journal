"use client";
import styles from "./LoginSection.module.scss";
import cn from "classnames";
import { createAuthClient } from "better-auth/client";

const client = createAuthClient();

type LoginSectionProps = {
  className?: string;
};

const LoginSection = ({ className }: LoginSectionProps) => {
  return (
    <div className={cn(styles.div, className)}>
      <button onClick={() => client.signIn.social({ provider: "google" })}>
        Войти через Google
      </button>
    </div>
  );
};

export default LoginSection;
