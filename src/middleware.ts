import { chain } from "@nimpl/middleware-chain";
import { NextRequest, NextResponse } from "next/server";
import { locales } from "./config";
import { cookies } from "next/headers";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: "id",
});

export const middleware = chain([
    async (req: NextRequest) => {
        const token = cookies().get("CMS.TOKEN")?.value;
        const url = req.nextUrl.clone();
        const pathname = url.pathname;

        const referer = req.headers.get("referer");
        let refererLocale = "";

        if (referer) {
            const pathLocaleMatch = referer.match(/\/\/[^/]+\/([^/]+)/);
            if (pathLocaleMatch && locales.includes(pathLocaleMatch[1])) {
                refererLocale = pathLocaleMatch[1];
            }
        }

        const effectiveLocale = refererLocale || "id";

        const hasLocale = locales.some((locale) =>
            req.nextUrl.pathname.startsWith(`/${locale}`)
        );
        if (!hasLocale) {
            const url = req.nextUrl.clone();
            url.pathname = `/${effectiveLocale}${url.pathname}`;
            return NextResponse.redirect(url);
        }

        return intlMiddleware(req);
    },
]);

export const config = {
    matcher: ["/", "/(id|en)/:path*", "/((?!api|_next|.*\\..*).*)"],
};
