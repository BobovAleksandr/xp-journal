import IconButton from "@/shared/components/IconButton/IconButton";
import IconRight from "@/shared/assets/chevron-right.svg";
import IconLeft from "@/shared/assets/chevron-left.svg";
import cn from "classnames";
import styles from "./GalleryControls.module.scss";

type Props = {
  children: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  className?: string;
};

const GalleryControls = ({ children, onNext, onPrev, className }: Props) => {
  return (
    <div className={cn(styles.gallery_container, className)}>
      <IconButton
        icon={IconLeft}
        onClick={onPrev}
        variant="large"
        className={styles.dialog_image_button}
      />
      {children}
      <IconButton
        icon={IconRight}
        onClick={onNext}
        variant="large"
        className={styles.dialog_image_button}
      />
    </div>
  );
};

export default GalleryControls;
