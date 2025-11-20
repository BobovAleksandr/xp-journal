import Button from "@/shared/components/Button/Button";
import styles from "./PageError.module.scss";
import { PUBLIC_ROUTES } from "@/app/constants";
import realoadIcon from "@/shared/assets/arrow-rotate-left.svg";
import chevronCion from "@/shared/assets/chevron-left.svg";

type PageErrorProps = {
  className?: string;
  error: Error & { digest?: string };
  reset: () => void;
};

const PageError = ({ error, reset }: PageErrorProps) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Что-то пошло не так...</h1>
      <p className={styles.message}>{error.message}</p>
      <div className={styles.buttons}>
        <Button
          icon={chevronCion}
          variant="light"
          as="internalLink"
          href={PUBLIC_ROUTES.HOME}
          className={styles.button}
        >
          На главную
        </Button>

        <Button
          icon={realoadIcon}
          variant="outline"
          className={styles.button}
          onClick={() => reset()}
        >
          Попробовать снова
        </Button>
      </div>
    </section>
  );
};

export default PageError;
