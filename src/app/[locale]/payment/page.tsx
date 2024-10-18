"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
    getProductDetailsByID,
    IFavouriteGame,
    Item,
} from "@/lib/services/payment";
import { HandleLoading, HandleNoData } from "@/components/main/status";
import usePaymentMethodStore from "@/lib/store";
import { PaymentPendingContent } from "./_components/pending";
import { PaymentCompleteContent } from "./_components/complete";

const Payment = () => {
    const t = useTranslations("page_payment");
    const { paymentMethod, setPaymentMethod, resetPaymentMethod } =
        usePaymentMethodStore();

    const [product, setProduct] = useState<IFavouriteGame | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function getThisProductDetail() {
        if (paymentMethod.game_id)
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
                        {paymentMethod.payment_status === "pending" && (
                            <PaymentPendingContent product={product} />
                        )}
                        {paymentMethod.payment_status === "success" && (
                            <PaymentCompleteContent product={product} />
                        )}
                    </>
                ) : (
                    <HandleNoData />
                )}
            </div>
        </>
    );
};

export default Payment;
