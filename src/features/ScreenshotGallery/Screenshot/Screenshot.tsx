"use client";

import { buildImageUrl } from "@/shared/utils/buildImageUrl";
import styles from "./Screenshot.module.scss";
import cn from "classnames";
import Image from "next/image";

type ScreenshotProps = {
  imageId: string;
  alt: string;
  className?: string;
  onClick: () => void;
};

const Screenshot = ({ imageId, alt, onClick, className }: ScreenshotProps) => {
  return (
    <Image
      onClick={onClick}
      width={464}
      height={261}
      src={buildImageUrl(imageId, 'screenshot_med')}
      alt={alt}
      className={cn(styles.screenshot, className)}
    />
  );
};

export default Screenshot;
