"use client";

import PageSection from "@/shared/components/PageSection/PageSection";
import styles from "./Screenshots.module.scss";
import { TClientScreenshot } from "@/entities/game/model/types";
import Screenshot from "@/features/ScreenshotGallery/Screenshot/Screenshot";
import ScreenshotDialog from "@/features/ScreenshotGallery/ScreenshotDialog/ScreenshotDialog";
import { useCallback, useState } from "react";

type ScreenshotsProps = {
  screenshots: TClientScreenshot[];
  gameName: string;
};

const Screenshots = ({ screenshots, gameName }: ScreenshotsProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleChangeScreenshot = useCallback((index: number) => {
    setActiveImageIndex(index);
  }, []);

  const onNext = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null ? 0 : (prev + 1) % screenshots.length
    );
  }, [screenshots.length]);

  const onPrev = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null ? 0 : (prev - 1 + screenshots.length) % screenshots.length
    );
  }, [screenshots.length]);

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
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
};

export default Screenshots;
