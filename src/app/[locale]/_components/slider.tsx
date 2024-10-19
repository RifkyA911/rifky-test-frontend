import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { FlashSale } from "./card";

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
                            modules={[Pagination, Navigation, EffectCoverflow]}
                            slidesPerView={1.3}
                            spaceBetween={40}
                            loop={true}
                            centeredSlides={true}
                            onSwiper={(swiper) => {
                                console.log(swiper.activeIndex);
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setSlideIndex(swiper.activeIndex);
                            }}
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
                            navigation={true}
                            pagination={{
                                clickable: true,
                                el: ".home-pagination",
                                type: "bullets",
                                // bulletClass: ".home-dot",
                                // bulletActiveClass: ".home-dot-active",
                            }}
                            // onActiveIndexChange={(swiper) => {
                            //     console.log(
                            //         "active index is",
                            //         swiper.activeIndex
                            //     );
                            // }}
                            effect={"coverflow"}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                        >
                            {data.map((slide, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        width: "1200px",
                                        height: "400px",
                                        transition: "transform 0.3s ease",
                                        // scale: index === slideIndex ? 1 : 0.8,
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
                        <div className="absolute top-[340px] left-1/2 z-[999]">
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
