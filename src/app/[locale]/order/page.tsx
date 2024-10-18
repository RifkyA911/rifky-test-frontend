"use client";
import { useEffect, useState } from "react";
import {
    manrope,
    notoSans,
    plusJakarta,
    poppins,
    spaceGrostesk,
} from "@/components/main/font";
import {
    ALLPaymentMethod,
    IPaymentMethod,
    paymentEWallet,
    paymentMethods,
    paymentQRIS,
} from "@/config";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
    getProductDetailsByID,
    IFavouriteGame,
    Item,
} from "@/lib/services/products-detail";
import { HandleLoading, HandleNoData } from "@/components/main/status";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiFileCopy2Line } from "react-icons/ri";
import usePaymentMethodStore from "@/lib/store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const formSchema = z.object({
    user_id: z
        .string()
        .min(2, { message: "User ID minimal 2 huruf" })
        .default(""),
    zone_id: z
        .string()
        .min(2, { message: "Zone ID minimal 2 huruf" })
        .default(""),
    wa: z
        .string()
        .min(10, { message: "Nomor WhatsApp minimal 10 huruf" })
        .default("08"),
    promo_code: z.string().default(""),
    payment_method: paymentMethods.default("QRIS"),
});

const ProductsID = ({ params }: { params: { id: string } }) => {
    const t = useTranslations("page_order");
    const { paymentMethod, setPaymentMethod, resetPaymentMethod } =
        usePaymentMethodStore();

    const [product, setProduct] = useState<IFavouriteGame | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function getThisProductDetail() {
        if (paymentMethod)
            getProductDetailsByID(parseInt(paymentMethod.game_id))
                .then((data: IFavouriteGame | undefined) => {
                    if (data) setProduct(data);
                })
                .catch((err: Error) => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
    }

    useEffect(() => {
        if (paymentMethod) getThisProductDetail();
    }, [paymentMethod]);
    return (
        <>
            <div className="min-h-screen w-full ">
                {isLoading ? (
                    <HandleLoading />
                ) : paymentMethod ? (
                    <>
                        <section
                            className={
                                manrope.className +
                                "  flex flex-col w-full md:w-[1200px] mx-auto gap-4 md:gap-[60px] px-4 md:px-0 py-8 md:py-[60px]"
                            }
                        >
                            <img
                                src={"/images/order/banner.png"}
                                alt="product"
                                className="p-0 hidden md:block"
                            />
                            <img
                                src={"/images/order/banner_mobile.png"}
                                alt="product"
                                className="p-0 md:hidden"
                            />
                            <div className="flex flex-col w-full gap-4 relative bg-[#282828] p-4 md:p-8 rounded-xl">
                                <div className="flex items-center space-x-2 border border-gray-300 rounded-lg overflow-hidden bg-[#3E3E3E] h-[34px] md:h-[56px]">
                                    <span className="p-2 md:p-4 text-gray-500">
                                        <Search className="w-5 h-5 text-white" />
                                    </span>
                                    <Input
                                        placeholder={t("pl1")}
                                        className="m-0 md:p-1 rounded-tl-lg rounded-bl-lg w-[190px] md:w-[304px] flex-grow border-none focus:ring-0 focus:outline-none bg-transparent"
                                    />
                                    <Button
                                        type="button"
                                        className="hidden md:block w-[81px] md:w-[114px] text-xs md:text-sm h-full m-0 rounded-none p-2"
                                    >
                                        {t("btn1")}
                                    </Button>
                                </div>
                                <div className="flex flex-row">
                                    <div className="text-[#909090] text-[10px] md:text-xs">
                                        {t("disclamer")}
                                        <Link
                                            href={"#"}
                                            className="text-[10px] md:text-xs text-white"
                                        >
                                            {" "}
                                            Whatsapp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-4 relative rounded-xl">
                                <h1
                                    className={
                                        spaceGrostesk.className +
                                        " text-white text-[32px] font-bold"
                                    }
                                >
                                    {t("h1")}
                                </h1>
                                <Link
                                    href="/order/1"
                                    className={
                                        manrope.className +
                                        " flex flex-col md:flex-row w-full gap-4 justify-between relative bg-[#282828] px-5 py-6 rounded-xl"
                                    }
                                >
                                    <div className="flex flex-row gap-4 md:gap-9">
                                        <Image
                                            src="/images/products/pp.png"
                                            alt="product"
                                            width={40}
                                            height={40}
                                            className="w-[40px] h-[40px]"
                                        />
                                        <div className="flex flex-col ">
                                            <p className="text-sm text-[#C9C9C9]">
                                                Mobile Legends Bang Bang
                                            </p>
                                            <p className="text-white font-semibold">
                                                14820 Diamonds (12389 + 2431
                                                Bonus)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 md:gap-9">
                                        <div className="flex flex-col ">
                                            <p className="text-sm text-[#C9C9C9]">
                                                {t("p1")}
                                            </p>
                                            <p className="text-white  font-semibold">
                                                {new Intl.NumberFormat(
                                                    "id-ID",
                                                    {
                                                        style: "currency",
                                                        currency: "IDR",
                                                    }
                                                ).format(3056113)}
                                            </p>
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="text-sm text-[#C9C9C9]">
                                                {t("p2")}
                                            </p>
                                            <p className="text-white  font-semibold">
                                                QRIS
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 md:gap-9 items-center">
                                        <div className="flex flex-col ">
                                            <p className="text-sm text-[#C9C9C9]">
                                                {t("p3")}
                                            </p>
                                            <p className="text-white  font-semibold">
                                                24 Agustus 2023, 14:08
                                            </p>
                                        </div>
                                        <Button
                                            type="button"
                                            size={"lg"}
                                            className="bg-[#95BF001A]/10 text-[#95BF00] font-semibold"
                                        >
                                            Success
                                        </Button>
                                    </div>
                                </Link>
                                <div className="flex flex-col justify-center items-center gap-4 my-8">
                                    <Image
                                        src="/images/order/maintenance.png"
                                        alt="line"
                                        width={240}
                                        height={240}
                                        className="w-[160px] h-[160px]"
                                    />
                                    <p className="text-xs md:text-sm text-center px-8">
                                        {t("no_data")}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <HandleNoData />
                )}
            </div>
        </>
    );
};

export default ProductsID;
