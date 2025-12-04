"use client";

import Button from "@/shared/components/Button/Button";
import { GUEST_ONLY_ROUTES, PUBLIC_ROUTES } from "@/app/constants";
import personIcon from "./../assets/icons/person.svg";
import ProfileButton from "../ProfileButton/ProfileButton";
import Dropdown from "@/shared/components/Dropdown/Dropdown";
import MenuItem from "@/shared/components/MenuItem/MenuItem";
import LogoutIcon from "@/shared/assets/arrow-right-from-square.svg";
import { createAuthClient } from "better-auth/client";
import { useRouter } from "next/navigation";

type LoginBlockProps = {
  user?: {
    name?: string;
    image?: string | null;
  };
};

const client = createAuthClient();

const LoginBlock = ({ user }: LoginBlockProps) => {
  const router = useRouter();
  const currentName = user?.name || "Пользователь";

  const handleLogout = () => {
    client.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push(PUBLIC_ROUTES.HOME);
          router.refresh();
        },
      },
    });
  };

  return (
    <>
      {!user ? (
        <Button
          variant="light"
          as="internalLink"
          href={GUEST_ONLY_ROUTES.LOGIN}
          icon={personIcon}
        >
          Войти
        </Button>
      ) : (
        <Dropdown
          closeOnClick
          trigger={<ProfileButton name={currentName} userImage={user.image} />}
        >
          <MenuItem as="button" onClick={handleLogout} icon={LogoutIcon}>
            Выйти
          </MenuItem>
        </Dropdown>
      )}
    </>
  );
};

export default LoginBlock;
