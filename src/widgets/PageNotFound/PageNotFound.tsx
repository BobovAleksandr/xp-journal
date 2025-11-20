import Button from "@/shared/components/Button/Button";
import styles from "./PageNotFound.module.scss";
import { PUBLIC_ROUTES } from "@/app/constants";
import chevronIcon from "@/shared/assets/chevron-left.svg";

const PageNotFound = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>
        <span className={styles.heading_error}>Ошибка</span>
        <span className={styles.heading_404}>404</span>
        <span className={styles.heading_text}>Страницы не существует</span>
      </h1>
      <Button
        as="internalLink"
        icon={chevronIcon}
        variant="light"
        href={PUBLIC_ROUTES.HOME}
      >
        На главную
      </Button>
    </section>
  );
};

export default PageNotFound;
