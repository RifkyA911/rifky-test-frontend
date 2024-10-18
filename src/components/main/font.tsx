import {
    Manrope,
    Poppins,
    Space_Grotesk,
    Plus_Jakarta_Sans,
    Noto_Sans,
} from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const spaceGrostesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const notoSans = Noto_Sans({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});
