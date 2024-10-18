import { poppins } from "@/components/main/font";
import { GrRadial, GrRadialSelected } from "react-icons/gr";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaCheck, FaChevronRight, FaTag } from "react-icons/fa";
import Link from "next/link";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const PaymentCreditCard = ({ form }: { form: any }) => {
    const t = useTranslations("page_products_id");

    return (
        <>
            <FormField
                control={form.control}
                name="promo_code"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex items-center space-x-2 border border-gray-300 rounded-lg overflow-hidden bg-[#3E3E3E] h-[34px] md:h-[54px]">
                            <span className="p-2 md:p-4 text-gray-500">
                                <Search className="w-5 h-5 text-white" />
                            </span>
                            <Input
                                {...field}
                                placeholder={t("section2.form.promo_i")}
                                className="m-0 md:p-1 rounded-tl-lg rounded-bl-lg w-[190px] md:w-[304px] flex-grow border-none focus:ring-0 focus:outline-none bg-transparent"
                            />
                            <Button
                                type="button"
                                className="w-[81px] md:w-[114px] text-xs md:text-base h-full m-0 rounded-none p-2"
                            >
                                {t("section2.form.promo_btn")}
                            </Button>
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Link
                href="/promo"
                className="flex gap-4 justify-between bg-[#282828] outline outline-1 outline-[#3E3E3E] p-4 rounded-lg"
            >
                <div className="flex gap-4">
                    <FaTag className="w-5 h-5 text-white" />
                    <p className="text-sm text-semibold">
                        {t("section2.form.promo")}
                    </p>
                </div>
                <FaChevronRight className="w-3 h-3 text-white" />
            </Link>
        </>
    );
};

export interface IPaymentMethodCard {
    id: string | null;
    name: string;
    // href: string;
    icon: string;
    fee: string;
    selectPayment: any;
    setSelectPayment: any;
}
[];

export const PaymentMethodCard = ({
    id = null,
    name,
    icon,
    fee = "+ Rp 1.500,-",
    selectPayment,
    setSelectPayment,
}: IPaymentMethodCard) => {
    const t = useTranslations("page_products_id");

    return (
        <div
            className={`${
                selectPayment == name
                    ? "outline outline-2 outline-white"
                    : "outline-none"
            } flex md:flex-col gap-3 md:h-[238.53px] md:bg-[#3E3E3E] p-3 rounded-xl mx-[2px] relative`}
            onClick={() => {
                setSelectPayment(name);
            }}
        >
            <Image
                alt="qris"
                src={icon}
                width={190}
                height={130}
                className="h-[50px] w-[70px] md:h-[130.53px] md:w-full rounded-lg"
            />
            <div className={poppins.className + " flex flex-col gap-2"}>
                <p className="text-white text-sm">{name}</p>
                <div className="flex md:flex-col gap-2">
                    <p className="text-[#A1A1A1] text-[10px] md:text-sm">
                        {t("section2.form.fee")}
                    </p>
                    <p className="text-white text-[10px] md:text-sm font-semibold">
                        {fee}
                    </p>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-end ml-auto pr-2">
                {selectPayment == name ? (
                    <GrRadialSelected className="text-white w-6 h-6" />
                ) : (
                    <GrRadial className="text-white w-6 h-6" />
                )}
            </div>
            {selectPayment == name && (
                <div className="absolute hidden md:block bg-white bottom-[-2px] right-[-2px] p-1 rounded-tl-lg rounded-br-lg">
                    <FaCheck className="w-4 h-4 text-black" />
                </div>
            )}
        </div>
    );
};
