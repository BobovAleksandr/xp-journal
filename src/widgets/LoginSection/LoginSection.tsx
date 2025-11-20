"use client";

import styles from "./LoginSection.module.scss";
import cn from "classnames";
import { createAuthClient } from "better-auth/client";
import Button from "@/shared/components/Button/Button";
import GoogleIcon from "@/shared/assets/google-icon.svg";
import { H1 } from "@/shared/components/Typography/Typography";

const client = createAuthClient();

type LoginSectionProps = {
  className?: string;
};

const handleLogin = () => {
  client.signIn.social({ provider: "google" });
};

const LoginSection = ({ className }: LoginSectionProps) => {

  return (
    <section className={cn(styles.section, className)}>
      <H1>Авторизация</H1>
      <Button icon={GoogleIcon} variant="default" onClick={handleLogin}>
        Войти через Google
      </Button>
    </section>
  );
};

export default LoginSection;
