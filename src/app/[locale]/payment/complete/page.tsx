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
import { FaStar } from "react-icons/fa6";
import { RiFileCopy2Line } from "react-icons/ri";
import usePaymentMethodStore from "@/lib/store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { InfoCard } from "../_components/card";

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
    const t = useTranslations("page_payment_pending");
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
                        <div className="flex flex-col w-full gap-4 relative mb-[110px]">
                            <section
                                className={
                                    manrope.className +
                                    "  flex flex-col md:flex-row w-full md:w-[792px] mx-auto p-4 md:p-10 gap-8 md:gap-4 "
                                }
                            >
                                {product ? (
                                    <div className="flex flex-col gap-8 md:gap-5 w-full md:w-[793px]  items-center">
                                        <div className="flex w-full flex-col items-center bg-[#282828] rounded-t-xl">
                                            <div
                                                className={
                                                    poppins.className +
                                                    " flex flex-col md:flex-row w-full gap-5 md:items-center justify-between p-4 md:p-8 bg-[#16C8291A]/10 rounded-t-xl"
                                                }
                                            >
                                                <div className="flex gap-4 items-center">
                                                    <Image
                                                        src={
                                                            "/images/payment/invoice.png"
                                                        }
                                                        width={100}
                                                        height={100}
                                                        alt="price"
                                                        className="w-[58px] h-[58px]"
                                                    />
                                                    <div className="flex flex-col">
                                                        <p className="text-xs text-[#A1A1A1]">
                                                            {t("section2.p2")}
                                                        </p>
                                                        <div className="flex items-center gap-2">
                                                            <p className="font-semibold text-xl">
                                                                {
                                                                    paymentMethod.wa
                                                                }{" "}
                                                            </p>
                                                            <RiFileCopy2Line
                                                                className="w-6 h-6 cursor-pointer text-[#8d8d8d]"
                                                                onClick={() => {
                                                                    navigator.clipboard.writeText(
                                                                        paymentMethod.wa ??
                                                                            ""
                                                                    );
                                                                    alert(
                                                                        "Copied to clipboard"
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p
                                                    className={
                                                        poppins.className +
                                                        " bg-[#16C829] rounded-full w-full md:w-[156px] text-sm text-white py-[10px] px-4 text-center"
                                                    }
                                                >
                                                    {t("payment_success.info")}
                                                </p>
                                            </div>
                                            <div className="md:hidden flex flex-col gap-4 w-full justify-start p-4">
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-xs text-[#A1A1A1]">
                                                        {t("section2.p1")}
                                                    </p>
                                                    <p className="font-semibold text-sm">
                                                        {paymentMethod.wa}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-xs text-[#A1A1A1]">
                                                        {t("section2.p3")}
                                                    </p>
                                                    <p className="font-semibold text-sm">
                                                        {paymentMethod.payment_method +
                                                            " " +
                                                            t("section2.p31")}
                                                    </p>
                                                </div>
                                            </div>
                                            <Separator className="md:hidden bg-[#3E3E3E]" />

                                            <div className="w-full flex flex-col p-4 md:py-5 md:px-8 ">
                                                <div
                                                    className={
                                                        spaceGrostesk.className +
                                                        " flex gap-6 items-center"
                                                    }
                                                >
                                                    <Image
                                                        src={product.image}
                                                        width={100}
                                                        height={100}
                                                        alt="price"
                                                        className="w-20 h-20 rounded-xl"
                                                    />
                                                    <div className="flex flex-col gap-2">
                                                        <p className="text-xl font-bold">
                                                            {product.name}
                                                        </p>
                                                        <p className="text-sm ">
                                                            {product.publisher}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Separator className=" bg-[#3E3E3E]" />
                                            <InfoCard context="success" />
                                            <div
                                                className={
                                                    poppins.className +
                                                    "flex flex-row md:grid md:grid-cols-2 gap-4 w-full p-4 md:py-5 md:px-8 bg-[#16C829] text-white rounded-b-xl"
                                                }
                                            >
                                                <h3 className="hidden md:block font-semibold ">
                                                    {t("section2.total")}
                                                </h3>
                                                <h3 className="md:hidden font-semibold ">
                                                    {t("section2.mobile_total")}
                                                </h3>
                                                <div className="flex gap-4 items-center">
                                                    <p className="text-sm font-semi text-white">
                                                        {Intl.NumberFormat(
                                                            "id-ID",
                                                            {
                                                                style: "currency",
                                                                currency: "IDR",
                                                            }
                                                        ).format(
                                                            parseInt(
                                                                paymentMethod.wa ??
                                                                    "0"
                                                            )
                                                        )}
                                                        ???
                                                    </p>
                                                    <RiFileCopy2Line
                                                        className="w-6 h-6 cursor-pointer"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(
                                                                paymentMethod.wa ??
                                                                    ""
                                                            );
                                                            alert(
                                                                "Copied to clipboard"
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-col p-4 md:p-8 gap-6 bg-[#282828] rounded-xl">
                                            <h1 className="text-2xl font-bold text-white">
                                                {t("payment_success.p1")}
                                            </h1>
                                            <div className="flex flex-co gap-4 w-full">
                                                <div className="flex gap-4">
                                                    <h3>Rating:</h3>
                                                    <div className="flex">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <FaStar
                                                                    key={i}
                                                                    className={`w-5 h-5 hover:text-yellow transition duration-300 ease-in-out`}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <Textarea
                                                className="bg-[#3E3E3E] text-white text-xs h-[118px] md:h-auto "
                                                placeholder={t(
                                                    "payment_success.textarea"
                                                )}
                                            ></Textarea>
                                            <Link
                                                href="/"
                                                className={
                                                    poppins.className +
                                                    " w-full flex gap-2 outline outline-1 outline-white justify-center p-4 rounded-xl text-sm font-semibold"
                                                }
                                            >
                                                {t("payment_success.add")}
                                            </Link>
                                        </div>
                                        <Link
                                            href="/"
                                            className={
                                                poppins.className +
                                                " w-full flex gap-2 outline outline-1 outline-white justify-center p-6 rounded-xl font-semibold"
                                            }
                                        >
                                            {t("payment_success.link")}
                                        </Link>
                                    </div>
                                ) : (
                                    <>Loading</>
                                )}
                            </section>
                        </div>
                    </>
                ) : (
                    <HandleNoData />
                )}
            </div>
        </>
    );
};

export default ProductsID;
