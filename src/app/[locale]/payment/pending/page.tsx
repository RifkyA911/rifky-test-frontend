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
                                    "  flex flex-col md:flex-row w-full md:w-[1200px] mx-auto p-4 md:p-10 gap-8 md:gap-4 "
                                }
                            >
                                {/* col 1 */}
                                <div className="w-full md:w-[387px] flex flex-col gap-8">
                                    <div className="w-full bg-[linear-gradient(180deg,_rgba(36,36,36,0.8)_0%,_rgba(36,36,36,0.6)_100%)] text-center rounded-xl">
                                        <h1 className="text-white  text-xl font-bold p-4">
                                            {t("section1.h1")}
                                        </h1>
                                        <p className="text-xs text-[#A1A1A1] p-4">
                                            {t("section1.p1")}
                                        </p>
                                        <p className="text-xs text-[#A1A1A1] p-4">
                                            {t("section1.p2")}
                                        </p>
                                    </div>
                                    {paymentMethod.payment_method === "QRIS" ? (
                                        <div className="w-full flex flex-col gap-5 bg-[#282828] text-center rounded-xl py-8 px-6">
                                            <div
                                                className={
                                                    plusJakarta.className +
                                                    " flex gap-4 outline outline-white outline-1 rounded-lg p-3"
                                                }
                                            >
                                                <Image
                                                    src="/images/payment/qris.png"
                                                    alt="game"
                                                    width={200}
                                                    height={200}
                                                    className="w-[70px] h-[50px]"
                                                />
                                                <div className="flex flex-col text-left">
                                                    <p className="text-sm text-white">
                                                        Scan QRIS
                                                    </p>
                                                    <p className="text-xs text-[#B1B3B3]">
                                                        Shopee Pay, OVO, DANA,
                                                        Gopay, LinkAja, dan
                                                        transfer bank via QRIS
                                                    </p>
                                                </div>
                                            </div>
                                            <Image
                                                src="/images/payment/qr-code.png"
                                                alt="game"
                                                width={400}
                                                height={400}
                                                className="w-[319px] h-[319px]"
                                            />
                                            <Button
                                                type="button"
                                                className="font-semibold"
                                            >
                                                {t("section1.download")}
                                            </Button>
                                        </div>
                                    ) : (
                                        <div>E-Wallet</div>
                                    )}
                                </div>
                                {/* col 2 */}
                                {product ? (
                                    <div className="flex flex-col gap-8 md:gap-5 w-full md:w-[793px]  items-center">
                                        <div className="flex w-full flex-col items-center bg-[#282828] rounded-t-xl">
                                            <div
                                                className={
                                                    poppins.className +
                                                    " flex flex-col md:flex-row w-full gap-5 md:items-center justify-between p-4 md:py-5 md:px-8 md:bg-[#3E3E3E] rounded-t-xl"
                                                }
                                            >
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
                                                        {t("section2.p2")}
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <p className="font-semibold text-sm">
                                                            {paymentMethod.wa}{" "}
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
                                            <InfoCard context="pending" />

                                            <div
                                                className={
                                                    poppins.className +
                                                    "flex flex-row md:grid md:grid-cols-2 gap-4 w-full p-4 md:py-5 md:px-8 bg-white text-black rounded-b-xl"
                                                }
                                            >
                                                <h3 className="hidden md:blockfont-semibold ">
                                                    {t("section2.total")}
                                                </h3>
                                                <h3 className="md:hidden font-semibold ">
                                                    {t("section2.mobile_total")}
                                                </h3>
                                                <div className="flex gap-4 items-center">
                                                    <p className="text-sm font-semi text-[#009E11]">
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
                                        <Link
                                            href="/contact-us"
                                            className={
                                                poppins.className +
                                                " w-full flex gap-2 bg-[#282828] py-5 px-8 rounded-xl font-semibold"
                                            }
                                        >
                                            <RiCustomerService2Fill className="text-white w-6 h-6" />
                                            <p className="hidden md:block text-[#949494] text-sm">
                                                {t("section2.bottom")}
                                            </p>
                                            <p className=" md:hidden text-[#949494] text-sm">
                                                {t("section2.mobile_bottom")}
                                            </p>
                                            <p className="text-sm">
                                                {t("section2.contact")}
                                            </p>
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
