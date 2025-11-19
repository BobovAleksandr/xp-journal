import Button from "@/shared/components/Button/Button";
import styles from "./ProfileButton.module.scss";
import cn from "classnames";
import Image from "next/image";
import AvatarPlaceholder from "@/shared/assets/avatar-placeholder.svg";

type ProfileButtonProps = {
  className?: string;
  name: string;
  onClick?: () => void;
  userImage?: string | null;
};

const ProfileButton = ({
  name,
  onClick,
  userImage,
  className,
}: ProfileButtonProps) => {
  return (
    <Button
      variant="default"
      onClick={onClick}
      className={cn(styles.profile_button, className)}
    >
      {userImage ? (
        <Image
          src={userImage}
          alt={`Аватар пользователя ${name}`}
          width={24}
          height={24}
          className={styles.profile_button__avatar}
        />
      ) : (
        <AvatarPlaceholder width={24} height={24} />
      )}
      {name}
    </Button>
  );
};

export default ProfileButton;
