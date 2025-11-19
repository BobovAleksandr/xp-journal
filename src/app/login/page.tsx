import LoginSection from "@/widgets/LoginSection/LoginSection";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { PUBLIC_ROUTES } from "../constants";
import getCurrentSession from "@/features/Auth/getCurrentSession";

const Login = async () => {
  // Не пропускаем авторизованного пользователя
  const currentCookies = (await cookies()).toString();
  const session = await getCurrentSession(currentCookies);

  if (session) {
    redirect(PUBLIC_ROUTES.HOME);
  }

  return <LoginSection />;
};

export default Login;
