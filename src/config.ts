import { LocalePrefix, Pathnames } from "next-intl/routing";
import { z } from "zod";

export const defaultLocale = "id";
export const locales = ["en", "id"];

export const baseAPIURL = "https://6708f839af1a3998ba9fdc6e.mockapi.io";

export type IPaymentMethod =
    | "QRIS"
    | "DANA"
    | "OVO"
    | "SHOPEE_PAY"
    | "LINK_AJA";

export const paymentMethods = z.enum([
    "QRIS",
    "DANA",
    "OVO",
    "SHOPEE_PAY",
    "LINK_AJA",
]);

export const paymentQRIS = [
    {
        id: "QRIS",
        name: "QRIS",
        fee: 1.5,
        icon: "/images/payment/qris.png",
    },
];
export const paymentEWallet = [
    {
        id: "DANA",
        name: "DANA",
        fee: 1.5,
        icon: "/images/payment/dana.png",
    },
    {
        id: "OVO",
        name: "OVO",
        fee: 1.5,
        icon: "/images/payment/ovo.png",
    },
    {
        id: "SHOPEE_PAY",
        name: "SHOPEE_PAY",
        fee: 1.5,
        icon: "/images/payment/shopee_pay.png",
    },
    {
        id: "LINK_AJA",
        name: "LINK_AJA",
        fee: 1.5,
        icon: "/images/payment/link_aja.png",
    },
];

export const ALLPaymentMethod = [...paymentQRIS, ...paymentEWallet];

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/pathnames": {
        en: "/pathnames",
        id: "/pathnames",
    },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;
