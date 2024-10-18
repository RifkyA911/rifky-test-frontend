import { IPaymentMethod } from "@/config";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PaymentMethod {
    user_id: string;
    zone_id: string;
    wa: string;
    promo_code?: string;
    payment_method: IPaymentMethod;
    payment_status: "pending" | "success" | "failed";
    game_id: string;
}

interface PaymentMethodStore {
    paymentMethod: PaymentMethod;
    setPaymentMethod: (data: Partial<PaymentMethod>) => void;
    resetPaymentMethod: () => void;
    updatePaymentStatus: (status: PaymentMethod["payment_status"]) => void;
}

const usePaymentMethodStore = create<PaymentMethodStore>()(
    persist(
        (set) => ({
            paymentMethod: {
                user_id: "",
                zone_id: "",
                wa: "",
                promo_code: "",
                payment_method: "QRIS",
                payment_status: "pending",
                game_id: "",
            },
            setPaymentMethod: (data) =>
                set((state) => ({
                    paymentMethod: { ...state.paymentMethod, ...data },
                })),
            resetPaymentMethod: () =>
                set({
                    paymentMethod: {
                        user_id: "",
                        zone_id: "",
                        wa: "",
                        promo_code: "",
                        payment_method: "QRIS",
                        payment_status: "pending",
                        game_id: "",
                    },
                }),
            updatePaymentStatus: (status) =>
                set((state) => ({
                    paymentMethod: {
                        ...state.paymentMethod,
                        payment_status: status,
                    },
                })),
        }),
        {
            name: "payment-method-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default usePaymentMethodStore;
