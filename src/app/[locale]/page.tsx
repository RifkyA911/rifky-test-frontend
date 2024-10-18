"use client";
import { getFavouriteGame, IFavouriteGame } from "@/lib/services/home";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import {
    manrope,
    notoSans,
    plusJakarta,
    poppins,
    spaceGrostesk,
} from "@/components/main/font";
import { banners, flashSale } from "./_components/mock";
import { SwiperNavigation } from "./_components/slider";
import { FlashSale, GameCard } from "./_components/card";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Image from "next/image";

export default function Home() {
    const t = useTranslations("page_home");

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [selected, setSelected] = useState<"MOBILE" | "PC" | "RECOMENDATION">(
        "RECOMENDATION"
    );
    const [favouriteGame, setFavouriteGame] = useState<IFavouriteGame[] | null>(
        null
    );

    const fetchFavouriteGame = () => {
        getFavouriteGame()
            .then((res) => setFavouriteGame(res as any))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchFavouriteGame();
    }, []);

    return (
        <div className="w-full flex flex-col gap-4  ">
            {/* ------------------ Section 1 ------------------*/}
            <section
                className="flex flex-col gap-10 min-h-[600px] md:min-h-[1205px] relative  p-4 md:py-14 md:px-0"
                style={{
                    backgroundImage: "url(/images/home/cover.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <SwiperNavigation context="banners" data={banners} />
                <div
                    className={`${poppins.className} w-full md:w-[1200px] mx-auto flex flex-col gap-4`}
                >
                    <h1 className={` text-sm md:text-[32px] font-semibold`}>
                        {t("section1.title")}
                    </h1>
                    <p className="text-[10px] md:text-xl font-normal">
                        {t("section1.desc")}
                    </p>
                </div>

                <div
                    className={
                        poppins.className +
                        " w-full md:w-[1200px] mx-auto flex flex-col gap-4"
                    }
                >
                    <div className="flex gap-4">
                        <h1
                            className={`${poppins.className} text-base md:text-[32px] font-bold uppercase`}
                        >
                            {t("section1.flash_sale.title")}
                        </h1>
                        <FlipClockCountdown
                            showSeparators={false}
                            showLabels={false}
                            renderMap={[false, true, true, true]}
                            to={new Date().getTime() + 24 * 3600 * 1000}
                            duration={0.5}
                            className="flip-clock"
                            renderOnServer={true}
                            style={{ fontFamily: "Arial" }}
                        />
                    </div>
                    <p className="text-[10px] md:text-xl">
                        {t("section1.flash_sale.desc")}
                    </p>
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-10">
                        {Array.from({ length: 8 }, (_, i) => (
                            <FlashSale key={i} />
                        ))}
                    </div>
                    <div className="md:hidden">
                        <SwiperNavigation
                            context="flashSale"
                            data={flashSale}
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-[56px]">
                    <Image
                        src={"/images/home/separator.png"}
                        fill
                        alt="separator"
                        className=""
                    />
                    <Image
                        src={"/images/home/shadow.png"}
                        fill
                        alt="separator"
                    />
                </div>
            </section>
            {/* ------------------ Section 2 ------------------*/}
            {favouriteGame && (
                <section className="w-full md:w-[1200px] mx-auto flex flex-col gap-10 py-6 px-4 md:py-20">
                    <h1
                        className={`${spaceGrostesk.className} text-base md:text-[32px] font-bold`}
                    >
                        {t("section2.title")}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        <div className="md:col-span-2">
                            <ul className=" grid grid-cols-3 md:grid-cols-1 md:gap-4">
                                <li
                                    className={`${
                                        selected == "RECOMENDATION" &&
                                        "bg-foreground dark:text-black light:text-white"
                                    } text-foreground text-xs text-center md:text-left md:text-base py-2 font-semibold md:py-3 px-4 md:px-5 rounded-lg cursor-pointer`}
                                    onClick={() => setSelected("RECOMENDATION")}
                                >
                                    {t("section2.btn.0")}
                                </li>
                                <li
                                    className={`${
                                        selected == "MOBILE" &&
                                        "bg-foreground dark:text-black light:text-white"
                                    }  text-foreground text-xs text-center md:text-left md:text-base py-2 font-semibold md:py-3 px-4 md:px-5 rounded-lg cursor-pointer`}
                                    onClick={() => setSelected("MOBILE")}
                                >
                                    Mobile Game
                                </li>
                                <li
                                    className={`${
                                        selected == "PC" &&
                                        "bg-foreground dark:text-black light:text-white"
                                    }  text-foreground text-xs text-center md:text-left md:text-base py-2 font-semibold md:py-3 px-4 md:px-5 rounded-lg cursor-pointer`}
                                    onClick={() => setSelected("PC")}
                                >
                                    PC Game
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-10 grid grid-rows-3 md:grid-rows-2 grid-cols-3 md:grid-cols-5 gap-2 md:gap-6">
                            {favouriteGame.map((game, i: number) => (
                                <>
                                    <GameCard key={game.id + i} game={game} />
                                </>
                            ))}
                            {favouriteGame.map((game, i: number) => (
                                <>
                                    <GameCard key={game.id + i} game={game} />
                                </>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
