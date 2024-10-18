import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
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

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});
const spaceGrostesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Voca Game",
    description: "Voca Game ",
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
