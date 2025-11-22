"use client";

import PageSection from "@/shared/components/PageSection/PageSection";
import styles from "./Screenshots.module.scss";
import { TClientScreenshot } from "@/entities/game/model/types";
import Screenshot from "@/entities/gallery/Screenshot/Screenshot";

type ScreenshotsProps = {
  screenshots: TClientScreenshot[];
  gameName: string;
};

const Screenshots = ({ screenshots, gameName }: ScreenshotsProps) => {
  return (
    <PageSection heading="Скриншоты">
      <ul className={styles.screenshots}>
        {screenshots.map((screen) => (
          <li key={screen.id}>
            <Screenshot
              onClick={() => {}}
              imageId={screen.imageId}
              alt={`Скриншот ${gameName}`}
            />
          </li>
        ))}
      </ul>
    </PageSection>
  );
};

export default Screenshots;
