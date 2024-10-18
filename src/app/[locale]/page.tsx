"use client";
import { getFavouriteGame, IFavouriteGame } from "@/lib/services/home";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Poppins, Space_Grotesk } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const spaceGrostesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const banners = [
    "/images/home/banner1.png",
    "/images/home/banner2.png",
    "/images/home/banner3.png",
    "/images/home/banner4.png",
    "/images/home/banner5.png",
    "/images/home/banner6.png",
];

const flashSale = [
    {
        id: 1,
        title: "200 Dennies",
        game: "Zenles Zone Zero",
        discount: "-15.0%",
        image: "/images/home/flash_sale.webp",
    },
    {
        id: 2,
        title: "200 Dennies",
        game: "Zenles Zone Zero",
        discount: "-15.0%",
        image: "/images/home/flash_sale.webp",
    },
];

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [selected, setSelected] = useState<"MOBILE" | "PC" | "RECOMENDATION">(
        "RECOMENDATION"
    );
    const [favouriteGame, setFavouriteGame] = useState<IFavouriteGame[] | null>(
        null
    );

    const t = useTranslations("page_home");

    const fetchFavouriteGame = () => {
        getFavouriteGame()
            .then((res) => setFavouriteGame(res))
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
                <div className="w-full md:w-[1200px] mx-auto flex flex-col gap-4">
                    <h1
                        className={`${poppins.className} text-sm md:text-[32px] font-semibold`}
                    >
                        {t("section1.title")}
                    </h1>
                    <p className="text-[10px] md:text-xl font-normal">
                        {t("section1.desc")}
                    </p>
                </div>

                <div className="w-full md:w-[1200px] mx-auto flex flex-col gap-4">
                    <h1
                        className={`${poppins.className} text-base md:text-[32px] font-bold uppercase`}
                    >
                        {t("section1.flash_sale.title")}
                    </h1>
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
                {/* <div className="w-full h-[56.66px] absolute bottom-0 z-[2]">
                    <div className=" ">
                        <Image
                            alt="Nav Logo"
                            src="/images/home/separator.png"
                            className="w-full md:w-[1200px] mx-auto"
                            fill
                        />
                    </div>
                </div> */}
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
                                    } text-foreground text-xs text-center md:text-base py-2 font-semibold md:py-3 px-4 md:px-5 rounded-lg cursor-pointer`}
                                    onClick={() => setSelected("RECOMENDATION")}
                                >
                                    {t("section2.btn.0")}
                                </li>
                                <li
                                    className={`${
                                        selected == "MOBILE" &&
                                        "bg-foreground dark:text-black light:text-white"
                                    }  text-foreground text-xs text-center md:text-base py-2 font-semibold md:py-3 px-4 md:px-5 rounded-lg cursor-pointer`}
                                    onClick={() => setSelected("MOBILE")}
                                >
                                    Mobile Game
                                </li>
                                <li
                                    className={`${
                                        selected == "PC" &&
                                        "bg-foreground dark:text-black light:text-white"
                                    }  text-foreground text-xs text-center md:text-base py-2 font-semibold md:py-3 px-4 md:px-5 rounded-lg cursor-pointer`}
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

export const SwiperNavigation = ({
    context,
    data,
}: {
    context: "banners" | "mobileBanners" | "flashSale";
    data: any[];
}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        const handleSlideChange = () => {
            if (swiperRef.current) {
                setSlideIndex(swiperRef.current.activeIndex);
            }
        };

        swiperRef.current.on("slideChange", handleSlideChange);

        return () => {
            if (swiperRef.current) {
                swiperRef.current.off("slideChange", handleSlideChange);
            }
        };
    }, []);

    useEffect(() => {
        console.log(slideIndex);
    }, [slideIndex]);

    return (
        <div className="w-full mx-auto overflow-hidden relative">
            {context === "banners" && (
                <>
                    <div className="hidden md:block relative">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1.3}
                            spaceBetween={40}
                            loop={true}
                            centeredSlides={true}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) =>
                                setSlideIndex(swiper.activeIndex)
                            }
                            breakpoints={{
                                390: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 1.2,
                                },
                                1024: {
                                    slidesPerView: 1.3,
                                },
                            }}
                            pagination={{
                                el: ".home-pagination",
                                bulletClass: "home-dot",
                                bulletActiveClass: "home-dot-active",
                                clickable: true,
                            }}
                            // effect={"coverflow"}
                            // coverflowEffect={{
                            //     rotate: 0,
                            //     stretch: 0,
                            //     depth: 100,
                            //     modifier: 2.5,
                            // }}
                        >
                            {data.map((slide, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        width: "1200px",
                                        height: "400px",
                                        transition: "transform 0.3s ease",

                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => setSlideIndex(index)}
                                    className="mx-auto rounded-xl"
                                >
                                    <Image
                                        src={slide}
                                        alt="slide"
                                        width={1200}
                                        height={400}
                                        className="rounded-xl"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute top-[340px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
                            <div className="home-pagination"></div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1}
                            spaceBetween={40}
                            loop={true}
                            centeredSlides={true}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) =>
                                setSlideIndex(swiper.activeIndex)
                            }
                            breakpoints={{
                                390: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 1.2,
                                },
                                1024: {
                                    slidesPerView: 1.3,
                                },
                            }}
                            pagination={{
                                el: ".home-pagination",
                                bulletClass: "home-dot",
                                bulletActiveClass: "home-dot-active",
                                clickable: true,
                            }}
                        >
                            {data.map((slide, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        width: "343px",
                                        height: "115px",
                                        transition: "transform 0.3s ease",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    onClick={() => setSlideIndex(index)}
                                    className="mx-auto rounded-xl"
                                >
                                    <Image
                                        src={slide}
                                        alt="slide"
                                        width={1200}
                                        height={400}
                                        className="rounded-xl"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute top-[340px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
                            <div className="home-pagination"></div>
                        </div>
                    </div>
                </>
            )}
            {context === "flashSale" && (
                <div className="md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1.3}
                        spaceBetween={40}
                        loop={true}
                        centeredSlides={false}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) =>
                            setSlideIndex(swiper.activeIndex)
                        }
                        breakpoints={{
                            390: {
                                slidesPerView: 1.3,
                            },
                            768: {
                                slidesPerView: 1.2,
                            },
                            1024: {
                                slidesPerView: 1.3,
                            },
                        }}
                        pagination={{
                            el: ".home-pagination",
                            bulletClass: "home-dot",
                            bulletActiveClass: "home-dot-active",
                            clickable: true,
                        }}
                    >
                        {data.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    width: "343px",
                                    height: "115px",
                                    transition: "transform 0.3s ease",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                                onClick={() => setSlideIndex(index)}
                                className="mx-auto rounded-xl"
                            >
                                <FlashSale key={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-[340px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
                        <div className="home-pagination"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

const FlashSale = () => {
    return (
        <div className="flex flex-col gap-2 h-[120px] w-[291px] bg-[#1A1A1A] rounded-lg">
            <div className="h-[72px] w-full flex gap-4 bg-gradient-to-r from-[#282828] to-[#666666] rounded-lg p-3">
                <Image
                    src={flashSale[0].image}
                    alt="flash_sale"
                    width={96}
                    height={96}
                    className="w-[48px] h-[48px] rounded-lg"
                />
                <div className="flex flex-col items-start justify-center">
                    <h5 className="text-base">{flashSale[0].title}</h5>
                    <p className="text-[10px]">{flashSale[0].game}</p>
                </div>
            </div>
            <div className="flex items-center justify-between px-3">
                <div className="bg-[#C72323] rounded-full font-medium text-[10px] px-3 py-1">
                    PROMO
                </div>
                <span>{flashSale[0].discount}</span>
            </div>
        </div>
    );
};

const GameCard = ({ game }: { game: IFavouriteGame }) => {
    return (
        <Link
            // key={game.id}
            href={`/products/${game.id}`}
            className="relative min-h-[200px] flex justify-end items-end w-full"
        >
            <div className="box-content rounded-md outline outline-white  absolute top-[50px] left-[15px] md:top-4 md:left-5 w-20 md:w-[116px] h-20 md:h-[116px] z-[1]">
                <Image
                    src={game.image ?? "/images/no-image.svg"}
                    alt={game.name}
                    width={114}
                    height={114}
                    className="outline-black rounded-md mx-auto"
                />
            </div>
            <div className="z-[0] w-full flex flex-col items-center justify-end rounded-xl md:clip-path-card-mirrored bg-[#282828] min-h-[102px] max-h-[102px] text-center px-2 py-4 md:p-4">
                <h2 className="text-[12px] font-semibold text-white line-clamp-1">
                    {game.name}
                </h2>
                <p className="text-[10px] text-gray-300 mt-2">
                    {game.publisher}
                </p>
            </div>
        </Link>
    );
};
