import type { Metadata } from "next";
import "./../globals.css";
import { Toaster } from "react-hot-toast";
// import Provider from "@/app/provider";
import {
    getLocale,
    getMessages,
    unstable_setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "@/components/main/footer";
import Navbar from "@/components/main/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { manrope, spaceGrostesk } from "@/components/main/font";

export const metadata = {
    title: "VocaGame - Top up Game dan Reseller Voucher Game termurah dan terpercaya di Indonesia.",
    description:
        "VocaGame menyediakan layanan Top up game dan Reseller Voucher Game termurah dan terpercaya di Indonesia. Topup lebih dari 100 game online terkemuka dunia di VocaGame mudah aman tanpa registrasi, pembelian instan langsung masuk dalam hitungan detik.",
    viewport: {
        maximumScale: 1,
        initialScale: 1,
        width: "device-width",
        shrinkToFit: "no",
        viewportFit: "cover",
    },
    charset: "utf-8",
    robots: "index,follow",
    twitter: {
        card: "summary_large_image",
        site: "VocaGame - Top up Game dan Reseller Voucher Game termurah dan terpercaya di Indonesia.",
    },
    openGraph: {
        title: "VocaGame - Top up Game dan Reseller Voucher Game termurah dan terpercaya di Indonesia.",
        description:
            "VocaGame menyediakan layanan Top up game dan Reseller Voucher Game termurah dan terpercaya di Indonesia. Topup lebih dari 100 game online terkemuka dunia di VocaGame mudah aman tanpa registrasi, pembelian instan langsung masuk dalam hitungan detik.",
        url: "https://vocagame.com/",
        type: "website",
        images: [
            {
                url: "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/medium_banner_follow_ig_dd735676bb-d2b9-original.png",
                alt: "VocaGame - Top up Game dan Reseller Voucher Game termurah dan terpercaya di Indonesia.",
                width: 1200,
                height: 630,
            },
        ],
        siteName:
            "VocaGame - Top up Game dan Reseller Voucher Game termurah dan terpercaya di Indonesia.",
    },
    icons: {
        icon: [
            {
                rel: "icon",
                sizes: "16x16",
                url: "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/voca-favicon-4d02-104eb.webp",
            },
        ],
        apple: [
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                url: "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/vocagame/voca-favicon-4d02-104eb.webp",
            },
        ],
    },
    canonical: "https://vocagame.com",
    keywords: [
        "top up mobile legends",
        "top up free fire",
        "top up ff",
        "top up ml",
        "ml top up",
        "mobile legend",
        "game top up",
    ],
    other: {
        "http-equiv": {
            "origin-trial":
                "A/kargTFyk8MR5ueravczef/wIlTkbVk1qXQesp39nV+xNECPdLBVeYffxrM8TmZT6RArWGQVCJ0LRivD7glcAUAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        },
    },
};

export default function LocaleLayout(props: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(props.params.locale);

    const messages = useMessages();

    return (
        <html lang="en">
            <body
                className={`${manrope.className} ${spaceGrostesk.className} antialiased relative`}
            >
                {/* <Provider> */}
                <NextIntlClientProvider
                    locale={props.params.locale}
                    messages={messages}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navbar />
                        <main className="mt-[100px] md:mt-[136px] min-h-screen text-foreground">
                            {props.children}
                        </main>
                        <Footer />
                        <Toaster />
                    </ThemeProvider>
                </NextIntlClientProvider>
                {/* </Provider> */}
            </body>
        </html>
    );
}
