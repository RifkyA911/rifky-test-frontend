"use client";
import { useEffect, useState } from "react";
import {
    manrope,
    plusJakarta,
    poppins,
    spaceGrostesk,
} from "@/components/main/font";
import {
    IPaymentMethod,
    paymentEWallet,
    paymentMethods,
    paymentQRIS,
} from "@/config";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdHeadsetMic } from "react-icons/md";
import { PiShieldCheckFill } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { FaCheckCircle, FaChevronRight, FaTag } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
    getProductDetailsByID,
    IFavouriteGame,
} from "@/lib/services/products-detail";
import { HandleLoading, HandleNoData } from "@/components/main/status";
import { SelectProduct, SelectProductList } from "./_components/selectProduct";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    PaymentCreditCard,
    PaymentMethodCard,
} from "./_components/paymentMethod";
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
    const t = useTranslations("page_products_id");
    const [product, setProduct] = useState<IFavouriteGame | null>(null);
    const [selectProduct, setSelectProduct] = useState<number | null>(null);
    const [selectPayment, setSelectPayment] = useState<IPaymentMethod>("QRIS");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const { control, handleSubmit, setValue, getValues } = form;
    function getThisProductDetail() {
        getProductDetailsByID(parseInt(params.id))
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
        getThisProductDetail();
        setValue("payment_method", "QRIS");
    }, []);

    useEffect(() => {
        setValue("payment_method", selectPayment);
    }, [getValues("payment_method"), selectPayment]);

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
        data
    ) => {
        return console.log(data);
    };

    useEffect(() => {
        console.log(getValues("payment_method"));
        console.log(getValues("wa"));
    }, [getValues]);

    return (
        <div className="w-full flex flex-col gap-4 min-h-screen relative mb-[110px]">
            {isLoading ? (
                <HandleLoading />
            ) : product ? (
                <>
                    <Image
                        src="/images/products/hero.png"
                        width={440}
                        height={240}
                        alt="hero"
                        className="hidden md:block w-full h-[240px]"
                    />
                    <section
                        className={
                            poppins.className +
                            " md:hidden w-full h-[550px] bg-white"
                        }
                    >
                        <div className="flex flex-col gap-4 p-8 justify-center items-center">
                            <Image
                                src={product.image}
                                width={180}
                                height={180}
                                alt="price"
                                className="w-[180px] h-[180px]"
                            />
                            <div className="flex gap-2 items-center py-1 px-3 rounded-xl backdrop-blur-lg bg-[#EAEAEA] text-black text-[8px] font-semibold">
                                GameManiac.com
                            </div>
                            <h1 className="font-semibold text-black">
                                {product.name}
                            </h1>
                            <p className="text-[#949494] text-[10px]">
                                {product.publisher}
                            </p>
                            <div className="flex gap-4">
                                <div className="flex gap-2 items-center py-1 px-3 rounded-xl backdrop-blur-lg bg-[#EAEAEA] text-black text-[8px] font-semibold">
                                    <MdHeadsetMic className="w-[18px] h-[18px] " />{" "}
                                    Customer Service 24/7
                                </div>
                                <div className="flex gap-2 items-center py-1 px-3 rounded-xl backdrop-blur-lg bg-[#EAEAEA] text-black text-[8px] font-semibold">
                                    <PiShieldCheckFill className="w-[18px] h-[18px] " />{" "}
                                    Official Distributor
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className={
                            plusJakarta.className +
                            " hidden absolute top-[0px] left-1/2 translate-x-[-50%] -translate-y-[0%] mx-auto md:flex flex-col gap-10 min-h-[600px] md:min-h-[1205px]  p-4 md:py-14 md:px-0"
                        }
                    >
                        <div className="flex flex-col justify-end w-full md:w-[1200px] h-[480px] relative mx-auto rounded-xl overflow-hidden">
                            <Image
                                src="/images/products/banner.png"
                                fill
                                alt="banner"
                                className="rounded-xl"
                            />
                            <div className="h-[177px] w-full backdrop-blur-lg bg-white/10">
                                <div className="flex h-full p-8 items-center gap-4">
                                    <Image
                                        src={product.image}
                                        width={110}
                                        height={110}
                                        alt="Product Picture"
                                        className=""
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col">
                                            <h1 className="text-[32px] font-bold">
                                                {product.name}
                                            </h1>
                                            <h2 className="text-xl">
                                                {product.publisher}
                                            </h2>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex gap-2 items-center py-1 px-3 rounded-xl backdrop-blur-lg bg-white/10">
                                                <MdHeadsetMic className="w-[18px] h-[18px] text-white" />{" "}
                                                Customer Service 24/7
                                            </div>
                                            <div className="flex gap-2 items-center py-1 px-3 rounded-xl backdrop-blur-lg bg-white/10">
                                                <PiShieldCheckFill className="w-[18px] h-[18px] text-white" />{" "}
                                                Official Distributor
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className={
                            spaceGrostesk.className +
                            "  flex flex-col md:flex-row gap-5 items-start mt-[-200px] md:mt-[300px] mx-auto w-full md:w-[1200px] p-4 md:p-0"
                        }
                    >
                        <div className="hidden md:block">
                            <SelectProductList
                                product={product}
                                selectProduct={selectProduct}
                                setSelectProduct={setSelectProduct}
                            />
                        </div>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className={
                                    spaceGrostesk.className +
                                    " flex flex-col gap-5 w-full  md:max-w-[488px] z-[2]"
                                }
                            >
                                <div className="w-full md:w-[488px] h-full bg-[#282828] rounded-xl p-6 flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 bg-[#3E3E3E] rounded-2xl h-[76px] w-[76px] flex items-center">
                                            <IoLogoGameControllerB className="w-10 h-[30px] text-white" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-[32px] font-bold">
                                                {t("section2.title2")}
                                            </h1>
                                            <p className="text-xl text-[#949494]">
                                                {t("section2.p1")}
                                            </p>
                                        </div>
                                    </div>
                                    <Separator className="h-1 bg-[#3E3E3E]" />

                                    <div className="flex flex-col gap-4 ">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="user_id"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            {t(
                                                                "section2.form.user_id"
                                                            )}{" "}
                                                            <span className="text-white">
                                                                *
                                                            </span>
                                                        </FormLabel>
                                                        <Input
                                                            {...field}
                                                            placeholder={t(
                                                                "section2.form.puser_id"
                                                            )}
                                                            className="bg-[#3E3E3E] h-[54px] "
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="zone_id"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            {t(
                                                                "section2.form.zone_id"
                                                            )}{" "}
                                                            <span className="text-white">
                                                                *
                                                            </span>
                                                        </FormLabel>
                                                        <Input
                                                            {...field}
                                                            placeholder={t(
                                                                "section2.form.pzone_id"
                                                            )}
                                                            className="bg-[#3E3E3E] h-[54px] "
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="wa"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        {t("section2.form.wa")}{" "}
                                                        <span className="text-white">
                                                            *
                                                        </span>
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        placeholder={t(
                                                            "section2.form.pwa"
                                                        )}
                                                        className="bg-[#3E3E3E] h-[54px] "
                                                    />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <p className="text-xs text-[#949494]">
                                            {t("section2.form.disclamer")}
                                        </p>
                                    </div>
                                </div>
                                <div className=" md:hidden">
                                    <SelectProductList
                                        product={product}
                                        selectProduct={selectProduct}
                                        setSelectProduct={setSelectProduct}
                                    />
                                </div>
                                <div className="hidden w-full md:w-[488px] h-full bg-[#282828] rounded-xl p-4 md:p-6 md:flex flex-col gap-6">
                                    <PaymentCreditCard form={form} />
                                </div>

                                <div className="w-full md:w-[488px] h-full bg-[#282828] rounded-xl p-4 md:p-6 flex flex-col gap-6">
                                    <h1 className="hidden md:block text-2xl font-bold">
                                        {t("section2.form.title3")}
                                    </h1>
                                    <div className="md:hidden flex flex-col gap-6">
                                        <PaymentCreditCard form={form} />
                                        <Separator className="h-1 bg-[#3E3E3E] " />
                                    </div>

                                    <div className="md:hidden flex gap-4 justify-between p-4 rounded-xl mx-[2px] relative outline outline-2 outline-white">
                                        <div className="bg-[#3E3E3E] p-3 rounded-xl w-[50px] h-[50px] flex my-auto">
                                            <IoWallet className="w-[30px] h-[30px] text-white" />
                                        </div>
                                        <div
                                            className={
                                                manrope.className +
                                                " flex flex-col gap-2"
                                            }
                                        >
                                            <p className="text-white text-base">
                                                VocaCredit
                                            </p>
                                            <p className="text-[#949494] text-xs">
                                                Rp 2.755.000,-
                                            </p>
                                            <p className="text-white text-xs">
                                                Sisa saldo: Rp 3.125.000,-
                                            </p>
                                        </div>
                                        <div className="flex my-auto">
                                            <FaCheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <Accordion
                                        type="multiple"
                                        className="w-full flex flex-col gap-4"
                                        defaultValue={["item-1", "item-2"]}
                                    >
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="bg-[#3E3E3E] px-4 rounded-xl">
                                                QRIS
                                            </AccordionTrigger>
                                            <AccordionContent className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                                {paymentQRIS.map((item) => (
                                                    <PaymentMethodCard
                                                        key={item.id}
                                                        {...item}
                                                        selectPayment={
                                                            selectPayment
                                                        }
                                                        setSelectPayment={
                                                            setSelectPayment
                                                        }
                                                    />
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger className="bg-[#3E3E3E] px-4 rounded-xl">
                                                E-Wallet
                                            </AccordionTrigger>
                                            <AccordionContent className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                                {paymentEWallet.map((item) => (
                                                    <>
                                                        <PaymentMethodCard
                                                            key={item.id}
                                                            {...item}
                                                            selectPayment={
                                                                selectPayment
                                                            }
                                                            setSelectPayment={
                                                                setSelectPayment
                                                            }
                                                        />
                                                    </>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </form>
                        </Form>
                    </section>
                </>
            ) : (
                <HandleNoData />
            )}
        </div>
    );
};

export default ProductsID;