import {
    manrope,
    notoSans,
    plusJakarta,
    poppins,
    spaceGrostesk,
} from "@/components/main/font";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiFileCopy2Line } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoCard } from "./card";
import { useTranslations } from "next-intl";
import { IFavouriteGame } from "@/lib/services/payment";
import usePaymentMethodStore from "@/lib/store";
import { useEffect, useState } from "react";
import { calculateTimeComponents, formatTimeValue } from "@/lib/utils";

export const PaymentPendingContent = ({
    product,
}: {
    product: IFavouriteGame | null;
}) => {
    const t = useTranslations("page_payment");

    const {
        paymentMethod,
        setPaymentMethod,
        resetPaymentMethod,
        updatePaymentStatus,
    } = usePaymentMethodStore();

    const [timeLeft, setTimeLeft] = useState<number>(0);

    const calculateTimeLeft = () => {
        const endDate = new Date(paymentMethod.end_at).getTime();
        const now = new Date().getTime();
        const difference = endDate - now;

        return difference > 0 ? difference : 0;
    };

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [paymentMethod.end_at]);

    const { days, hours, minutes, seconds } = calculateTimeComponents(timeLeft);

    useEffect(() => {
        const timer = setTimeout(() => {
            updatePaymentStatus("success");
            console.log("Payment status updated to success.");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
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
                        {timeLeft > 0 ? (
                            <div className="grid grid-cols-3 gap-2 w-[256px] mx-auto">
                                <div className="w-20 h-[101px] flex flex-col gap-2 text-white justify-center rounded-xl outline outline-1 outline-[#3E3E3E]">
                                    <h2 className="text-[32px]  font-bold">
                                        {formatTimeValue(hours)}
                                    </h2>
                                    <p className="text-xs">
                                        {t("section1.hour")}
                                    </p>
                                </div>
                                <div className="w-20 h-[101px] flex flex-col gap-2 text-white justify-center rounded-xl outline outline-1 outline-[#3E3E3E]">
                                    <h2 className="text-[32px]  font-bold">
                                        {formatTimeValue(minutes)}
                                    </h2>
                                    <p className="text-xs">
                                        {t("section1.minute")}
                                    </p>
                                </div>
                                <div className="w-20 h-[101px] flex flex-col gap-2 text-white justify-center rounded-xl outline outline-1 outline-[#3E3E3E]">
                                    <h2 className="text-[32px]  font-bold">
                                        {formatTimeValue(seconds)}
                                    </h2>
                                    <p className="text-xs">
                                        {t("section1.second")}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full">Payment time expired!</div>
                        )}
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
                                        Shopee Pay, OVO, DANA, Gopay, LinkAja,
                                        dan transfer bank via QRIS
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
                            <Link
                                href="/images/payment/qr-code.png"
                                download
                                className="font-semibold bg-white rounded-xl text-black px-3 py-2"
                            >
                                {t("section1.download")}
                            </Link>
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
                                        {new Intl.DateTimeFormat("id-ID", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                        }).format(
                                            new Date(
                                                paymentMethod.created_at as any
                                            )
                                        )}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs text-[#A1A1A1]">
                                        {t("section2.p2")}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-sm">
                                            {paymentMethod.invoice_id}
                                        </p>
                                        <RiFileCopy2Line
                                            className="w-6 h-6 cursor-pointer text-[#8d8d8d]"
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    paymentMethod.invoice_id ??
                                                        ""
                                                );
                                                alert("Copied to clipboard");
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
                            {product && (
                                <InfoCard context="pending" product={product} />
                            )}

                            <div
                                className={
                                    poppins.className +
                                    "flex flex-row md:grid md:grid-cols-2 gap-4 w-full p-4 md:py-5 md:px-8 bg-white text-black rounded-b-xl"
                                }
                            >
                                <h3 className="hidden md:block font-semibold ">
                                    {t("section2.total")}
                                </h3>
                                <h3 className="md:hidden font-semibold ">
                                    {t("section2.mobile_total")}
                                </h3>
                                <div className="flex gap-4 items-center">
                                    <p className="text-sm font-semi text-[#009E11]">
                                        {Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                        }).format(
                                            paymentMethod.discount ??
                                                paymentMethod.price
                                        )}
                                    </p>
                                    <RiFileCopy2Line
                                        className="w-6 h-6 cursor-pointer"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                paymentMethod.discount.toString() ??
                                                    paymentMethod.price.toString()
                                            );
                                            alert("Copied to clipboard");
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
                            <p className="text-sm">{t("section2.contact")}</p>
                        </Link>
                    </div>
                ) : (
                    <>Loading</>
                )}
            </section>
        </div>
    );
};
