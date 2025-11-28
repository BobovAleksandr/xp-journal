import styles from "./Video.module.scss";
import cn from "classnames";

const SIZE_VARIANTS = {
  small: { width: 464, height: 261 },
  large: { width: 1440, height: 810 },
} as const;

type VideoProps = {
  videoId: string;
  className?: string;
  variant: keyof typeof SIZE_VARIANTS;
  onClick?: () => void;
};

const Video = ({
  videoId,
  variant = "small",
  onClick,
  className,
}: VideoProps) => {
  return (
    <div className={cn(styles.video_container, className)} onClick={onClick}>
      <iframe
        className={styles.video}
        width={SIZE_VARIANTS[variant].width}
        height={SIZE_VARIANTS[variant].height}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      />
      {variant === "small" && <div className={styles.video_cover}></div>}
    </div>
  );
};

export default Video;
