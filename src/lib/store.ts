import { IPaymentMethod } from "@/config";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PaymentMethod {
    invoice_id: string;
    user_id: string;
    zone_id: string;
    wa: string;
    promo_code?: string;
    payment_method: IPaymentMethod;
    payment_status: "pending" | "success" | "failed";
    game_id: string;
    username?: string;
    item_id: string;
    price: number;
    discount: number;
    fee: number;
    end_at: string;
    created_at?: string;
    updated_at?: string;
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
                invoice_id: "",
                user_id: "",
                zone_id: "",
                wa: "",
                promo_code: "",
                payment_method: "QRIS",
                payment_status: "pending",
                game_id: "",
                username: "SilverStone",
                item_id: "",
                price: 0,
                discount: 0,
                fee: 0,
                end_at: "",
                created_at: "",
                updated_at: "",
            },
            setPaymentMethod: (data) =>
                set((state) => ({
                    paymentMethod: { ...state.paymentMethod, ...data },
                })),
            resetPaymentMethod: () =>
                set({
                    paymentMethod: {
                        invoice_id: "",
                        user_id: "",
                        zone_id: "",
                        wa: "",
                        promo_code: "",
                        payment_method: "QRIS",
                        payment_status: "pending",
                        game_id: "",
                        username: "SilverStone",
                        item_id: "",
                        price: 0,
                        discount: 0,
                        fee: 0,
                        end_at: "",
                        created_at: "",
                        updated_at: "",
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
