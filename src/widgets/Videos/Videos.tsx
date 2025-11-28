"use client";

import PageSection from "@/shared/components/PageSection/PageSection";
import styles from "./Videos.module.scss";
import { TClientVideo } from "@/entities/game/model/types";
import { useCallback, useState } from "react";
import Video from "@/features/VideoGallery/Video/Video";
import VideoDialog from "@/features/VideoGallery/VideoDialog/VideoDialog";

type ScreenshotsProps = {
  videos: TClientVideo[];
};

const Videos = ({ videos }: ScreenshotsProps) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const handleChangeVideo = useCallback((index: number) => {
    setActiveVideoIndex(index);
  }, []);

  const onNext = useCallback(() => {
    setActiveVideoIndex((prev) =>
      prev === null ? 0 : (prev + 1) % videos.length
    );
  }, [videos.length]);

  const onPrev = useCallback(() => {
    setActiveVideoIndex((prev) =>
      prev === null ? 0 : (prev - 1 + videos.length) % videos.length
    );
  }, [videos.length]);

  const isOpen = activeVideoIndex !== null;

  return (
    <>
      <PageSection heading="Видео">
        <ul className={styles.videos}>
          {videos.map((video, index) => (
            <li key={video.id}>
              <Video
                variant="small"
                videoId={video.videoId}
                onClick={() => handleChangeVideo(index)}
              />
            </li>
          ))}
        </ul>
      </PageSection>
      <VideoDialog
        isOpen={isOpen}
        videoId={isOpen ? videos[activeVideoIndex].videoId : null}
        onClose={() => setActiveVideoIndex(null)}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
};

export default Videos;
