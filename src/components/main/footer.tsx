import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const t = useTranslations("footer");
    return (
        <footer className="footer bg-[#282828] mt-6">
            <div className="md:w-[1200px] mx-auto flex flex-col h-full text-white">
                <div className="h-[301px] grid grid-cols-1 md:grid-cols-12 gap-4 px-5 py-10 md:py-16 md:px-0 ">
                    <div className="flex items-start md:col-span-4 gap-4 ">
                        <Image
                            alt="Nav Logo"
                            src="/images/footer-logo.png"
                            width={100}
                            height={100}
                            className="w-20 h-14"
                        />
                        <p className="text-2xl ">{t("logo")}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:col-span-8 ">
                        <div className="col-span-1 hidden md:flex flex-col gap-4 text-base">
                            <p className="uppercase font-bold">
                                {t("links.map_site.title")}
                            </p>
                            <Link href="/">{t("links.map_site.links.0")}</Link>
                            <Link href="/all-game">
                                {t("links.map_site.links.1")}
                            </Link>
                            <Link href="/auth/login">
                                {t("links.map_site.links.2")}
                            </Link>
                            <Link href="/auth/register">
                                {t("links.map_site.links.3")}
                            </Link>
                        </div>
                        <div className="col-span-1 hidden md:flex flex-col gap-4 text-base">
                            <p className="uppercase font-bold">
                                {t("links.top_up")}
                            </p>
                            <Link href="/product/id-mobile-legends">
                                Mobile Legends
                            </Link>
                            <Link href="/product/id-free-fire">Free Fire</Link>
                            <Link href="/product/id-pubg-mobile">
                                Pubg Mobile
                            </Link>
                            <Link href="/product/id-undawn">Undawn</Link>
                        </div>
                        <div className="col-span-1 flex md:flex-col gap-8 md:gap-4 text-base">
                            <div className="flex flex-col gap-4">
                                <p className="uppercase font-bold">
                                    {t("links.follow_us")}
                                </p>

                                <div className="flex gap-2 pb-4">
                                    <Link
                                        href="#"
                                        className="rounded-full p-3 bg-white text-[#5E5E5E] md:text-white md:bg-[#3E3E3E]"
                                    >
                                        <FaInstagram className="w-6 h-6" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="rounded-full p-3 bg-white text-[#5E5E5E] md:text-white md:bg-[#3E3E3E]"
                                    >
                                        <FaTiktok className="w-6 h-6" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="rounded-full p-3 bg-white text-[#5E5E5E] md:text-white md:bg-[#3E3E3E]"
                                    >
                                        <FaYoutube className="w-6 h-6" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <p className="uppercase hidden md:block font-bold">
                                    {t("links.business_question")}
                                </p>
                                <p className="uppercase md:hidden font-bold">
                                    {t("links.contact_us")}
                                </p>
                                <Link href="mailto:contact@h2h.id">
                                    contact@h2h.id
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Bottom Footer*/}
                <div className="py-6 border-t-2 border-white">
                    <div className="flex items-center justify-between gap-4 p-4 md:p-0 text-sm">
                        <p>
                            &copy; PT BERMAIN BERSAMA INDONESIA,{" "}
                            {new Date().getFullYear()}
                        </p>
                        <p className="hidden md:block">{t("bottoms.0")}</p>
                        <p className="hidden md:block">{t("bottoms.1")}</p>
                        <p className="hidden md:block">{t("bottoms.2")}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
