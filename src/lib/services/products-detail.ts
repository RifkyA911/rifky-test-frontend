import { baseAPIURL } from "@/config";
import axios from "axios";

export interface Item {
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

export const getProductDetailsByID = async (id: number) => {
    try {
        const req = await axios({
            method: "GET",
            url: baseAPIURL + `/api/v1/products/` + id,
        });
        const res = req.data as IFavouriteGame;
        return res;
    } catch (error) {
        console.log(error);
    }
};
