"use client";

import PageSection from "@/shared/components/PageSection/PageSection";
import styles from "./Screenshots.module.scss";
import { TClientScreenshot } from "@/entities/game/model/types";
import Screenshot from "@/features/Gallery/Screenshot/Screenshot";
import ScreenshotDialog from "@/features/Gallery/ScreenshotDialog/ScreenshotDialog";
import { useState } from "react";

type ScreenshotsProps = {
  screenshots: TClientScreenshot[];
  gameName: string;
};

const Screenshots = ({ screenshots, gameName }: ScreenshotsProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleChangeScreenshot = (index: number) => {
    setActiveImageIndex(index);
  };

  const isOpen = activeImageIndex !== null;

  return (
    <>
      <PageSection heading="Скриншоты">
        <ul className={styles.screenshots}>
          {screenshots.map((screen, index) => (
            <li key={screen.id}>
              <Screenshot
                imageId={screen.imageId}
                alt={`Скриншот ${gameName}`}
                onClick={() => {
                  handleChangeScreenshot(index);
                }}
              />
            </li>
          ))}
        </ul>
      </PageSection>
      <ScreenshotDialog
        isOpen={isOpen}
        imageId={isOpen ? screenshots[activeImageIndex].imageId : null}
        gameName={gameName}
        onClose={() => setActiveImageIndex(null)}
        onNext={() =>
          setActiveImageIndex((prev) =>
            prev === null ? 0 : (prev + 1) % screenshots.length
          )
        }
        onPrev={() =>
          setActiveImageIndex((prev) =>
            prev === null
              ? 0
              : (prev - 1 + screenshots.length) % screenshots.length
          )
        }
      />
    </>
  );
};

export default Screenshots;
