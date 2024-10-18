import { baseAPIURL } from "@/config";
import axios from "axios";

interface Item {
    id: number;
    name: string;
    price: number;
    priceDiscount: number;
    iconUrl: string;
}

export interface IFavouriteGame {
    createdAt: string;
    name: string;
    image: string;
    publisher: string;
    description: string;
    id: string;
    category: string;
    items: Item[];
}

export const getFavouriteGame = async () => {
    try {
        const req = await axios({
            method: "GET",
            url: baseAPIURL + `/api/v1/products`,
        });
        const res = req.data as IFavouriteGame[];
        return res;
    } catch (error) {
        console.log(error);
    }
};
