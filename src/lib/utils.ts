import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const calculateDiscountPercentage = (
    originalPrice: number,
    discountedPrice: number
) => {
    if (originalPrice <= 0) {
        throw new Error("Harga asli harus lebih besar dari nol.");
    }
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;

    if (discountPercentage < 0) {
        return null;
    }
    return discountPercentage.toFixed(2);
};
