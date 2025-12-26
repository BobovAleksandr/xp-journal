import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_FILTER_STATE } from "./features/GamesFilter/model/constants";
import { convertFilterToUrl } from "./features/GamesFilter/actions/convertParams";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const params = url.searchParams;
  const hasFiltersCookie = req.cookies.has('filters');

  let urlSearch = params.toString();

  // Если параметров нет
  if (params.toString() === '') {
    if (hasFiltersCookie) {
      urlSearch = req.cookies.get('filters')?.value || '';
    } else {
      urlSearch = convertFilterToUrl(DEFAULT_FILTER_STATE);
    }
  }

  // Если URL отличается от текущих параметров — делаем редирект
  if (urlSearch !== params.toString()) {
    const redirectUrl = url.clone();
    redirectUrl.search = urlSearch;
    const response = NextResponse.redirect(redirectUrl);

    response.cookies.set('filters', urlSearch, {
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    });

    return response;
  }

  // Если параметры не менялись, сохраняем в куки только если их не было
  if (!hasFiltersCookie) {
    const response = NextResponse.next();
    response.cookies.set('filters', urlSearch, {
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/games"],
};
