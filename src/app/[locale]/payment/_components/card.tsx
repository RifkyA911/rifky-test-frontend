import { poppins } from "@/components/main/font";
import usePaymentMethodStore from "@/lib/store";
import { useTranslations } from "next-intl";

export const InfoCard = ({ context }: { context: "pending" | "success" }) => {
    const t = useTranslations("page_payment_pending");

    const { paymentMethod, setPaymentMethod, resetPaymentMethod } =
        usePaymentMethodStore();
    return (
        <div
            className={
                poppins.className +
                " flex flex-col gap-5 w-full p-4 md:py-5 md:px-8"
            }
        >
            <h3 className="font-semibold hidden md:block">Detail</h3>
            <h3 className="font-semibold text-sm md:hidden">Detail ID Game</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between md:flex-col gap-2">
                        <p className="text-xs text-[#A1A1A1]">Item</p>
                        <p className="bg-transparent text-white text-sm font-bold">
                            {paymentMethod.wa}
                            ???
                        </p>
                    </div>
                    <div className="flex flex-row justify-between md:flex-col gap-2">
                        <p className="text-xs text-[#A1A1A1]">ZONE ID</p>
                        <p className="bg-transparent text-white text-sm font-bold">
                            {paymentMethod.zone_id}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between md:flex-col gap-2">
                        <p className="text-xs text-[#A1A1A1]">USER ID</p>
                        <p className="bg-transparent text-white text-sm font-bold">
                            {paymentMethod.user_id}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between md:flex-col gap-2">
                        <p className="text-xs text-[#A1A1A1]">Username</p>
                        <p className="bg-transparent text-white text-sm font-bold">
                            {paymentMethod.wa}
                            ????
                        </p>
                    </div>
                    {context == "success" && (
                        <>
                            <div className="hidden md:flex flex-col gap-2 md:">
                                <p className="text-xs text-[#A1A1A1]">
                                    {t("section2.p1")}
                                </p>
                                <p className="font-semibold text-sm">
                                    {paymentMethod.wa}
                                </p>
                            </div>
                            <div className="hidden md:flex flex-col gap-2">
                                <p className="text-xs text-[#A1A1A1]">
                                    {t("section2.p3")}
                                </p>
                                <p className="font-semibold text-sm">
                                    {paymentMethod.payment_method +
                                        " " +
                                        t("section2.p31")}
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <h3 className="font-semibold my-4 text-sm md:hidden">
                    {t("payment_success.h1")}
                </h3>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between md:flex-col gap-2">
                        <p className="text-xs text-[#A1A1A1]">
                            {t("section2.price")}
                        </p>
                        <p className="bg-transparent text-white text-sm font-bold">
                            {paymentMethod.wa}
                            ????
                        </p>
                    </div>
                    <div className="flex flex-row justify-between md:flex-col gap-2">
                        <p className="text-xs text-[#A1A1A1]">Fee</p>
                        <p className="bg-transparent text-white text-sm font-bold">
                            {paymentMethod.wa}
                            ???
                        </p>
                    </div>
                    <div className="flex flex-row justify-between md:flex-col gap-2">
                        <p className="text-xs text-[#A1A1A1]">
                            {t("section2.unique_code")}
                        </p>
                        <p className="bg-transparent text-white text-sm font-bold">
                            {paymentMethod.wa}
                            ???
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
