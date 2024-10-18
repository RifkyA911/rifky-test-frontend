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

export const generateInvoiceId = () => {
    const date = new Date();
    const timestamp = date.getTime();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `INV-${timestamp}-${random}`; //ex: 'INV-1627393847382-1234'
};

export const calculateTimeComponents = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

export const formatTimeValue = (value: number) => {
    return value.toString().padStart(2, "0");
};
