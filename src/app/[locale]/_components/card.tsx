import Image from "next/image";
import { flashSale } from "./mock";
import { IFavouriteGame } from "@/lib/services/home";
import Link from "next/link";
import { manrope } from "@/components/main/font";

export const FlashSale = () => {
    return (
        <div
            className={
                manrope.className +
                " flex flex-col gap-2 h-[120px] w-[291px] bg-[#1A1A1A] rounded-lg"
            }
        >
            <div className="h-[72px] w-full flex gap-4 bg-gradient-to-r from-[#282828] to-[#666666] rounded-lg p-3">
                <Image
                    src={flashSale[0].image}
                    alt="flash_sale"
                    width={96}
                    height={96}
                    className="w-[48px] h-[48px] rounded-lg"
                />
                <div className="flex flex-col items-start justify-center">
                    <h5 className="text-sm">{flashSale[0].title}</h5>
                    <p className="text-[10px]">{flashSale[0].game}</p>
                </div>
            </div>
            <div className="flex items-center justify-between px-3">
                <div className="bg-[#C72323] rounded-full font-medium text-[10px] px-3 py-1">
                    PROMO
                </div>
                <span>{flashSale[0].discount}</span>
            </div>
        </div>
    );
};

export const GameCard = ({ game }: { game: IFavouriteGame }) => {
    return (
        <Link
            // key={game.id}
            href={`/products/${game.id}`}
            className="relative min-h-[200px] flex justify-end items-end w-full"
        >
            <div className="box-content rounded-md outline outline-white  absolute top-[50px] left-[15px] md:top-4 md:left-5 w-20 md:w-[116px] h-20 md:h-[116px] z-[1]">
                <Image
                    src={game.image ?? "/images/no-image.svg"}
                    alt={game.name}
                    width={114}
                    height={114}
                    className="outline-black rounded-md mx-auto"
                />
            </div>
            <div className="z-[0] w-full flex flex-col items-center justify-end rounded-xl md:clip-path-card-mirrored bg-[#282828] min-h-[102px] max-h-[102px] text-center px-2 py-4 md:p-4">
                <h2 className="text-[12px] font-semibold text-white line-clamp-1">
                    {game.name}
                </h2>
                <p className="text-[10px] text-gray-300 mt-2">
                    {game.publisher}
                </p>
            </div>
        </Link>
    );
};
