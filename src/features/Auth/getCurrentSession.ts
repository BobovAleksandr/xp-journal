import { auth } from "../../auth";

export default async function getCurrentSession(cookies: string) {
  const session = await auth.api.getSession({
    headers: {
      cookie: cookies,
    },
  });

  return session;
}
