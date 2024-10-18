import { manrope, notoSans, poppins } from "@/components/main/font";
import { Separator } from "@/components/ui/separator";
import { Item } from "@/lib/services/products-detail";
import { calculateDiscountPercentage } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export const SelectProductList = ({
    product,
    selectProduct,
    setSelectProduct,
}: {
    product: any;
    selectProduct: any;
    setSelectProduct: any;
}) => {
    const t = useTranslations("page_products_id");

    return (
        <div className="flex flex-col gap-6 w-full md:w-[692px] md:min-h-[334px] bg-[#282828] rounded-xl p-4 md:p-6">
            <h3 className="hidden md:block text-2xl font-bold">
                {t("section2.title")}
            </h3>
            <div className="hidden md:flex flex-col gap-6 w-full">
                <div className="flex gap-2 px-4 py-3 items-center min-h-[56px] w-[146px] rounded-xl outline outline-1 outline-white">
                    <Image
                        src={product.items[0].iconUrl}
                        width={32}
                        height={32}
                        alt="price"
                        className="w-8 h-8"
                    />
                    <p className={poppins.className + " font-semibold text-sm"}>
                        Diamonds
                    </p>
                </div>
                <Separator className="h-1 bg-[#3E3E3E]" />
            </div>
            <div className="md:hidden grid grid-cols-2 bg-[#1A1A1A] min-h-[48px]">
                <div className="flex gap-2 items-center justify-center cursor-pointer border-b-2 border-white">
                    <Image
                        src={product.items[0].iconUrl}
                        width={32}
                        height={32}
                        alt="price"
                        className="w-4 h-4"
                    />
                    <p className={poppins.className + " font-bold text-xs"}>
                        Diamonds
                    </p>
                </div>
            </div>
            <div
                className={
                    manrope.className + " grid grid-cols-2 md:grid-cols-3 gap-4"
                }
            >
                {product.items.map((item, index) => (
                    <SelectProduct
                        key={index}
                        data={item}
                        selectProduct={selectProduct}
                        setSelectProduct={setSelectProduct}
                    />
                ))}
            </div>
        </div>
    );
};

export const SelectProduct = ({
    data,
    selectProduct,
    setSelectProduct,
}: {
    data: Item;
    selectProduct: Item | null;
    setSelectProduct: React.Dispatch<React.SetStateAction<Item>>;
}) => {
    return (
        <div
            className={`rounded-xl flex md:gap-2 outline  ${
                selectProduct?.id == data.id
                    ? "outline-2 outline-white bg-white/10"
                    : "outline-1 outline-[#3E3E3E]"
            } p-3 relative cursor-pointer `}
            onClick={() =>
                setSelectProduct({
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    priceDiscount: data.priceDiscount,
                    iconUrl: data.iconUrl,
                })
            }
        >
            <div className="flex flex-col md:gap-2">
                <p className="text-[10px] md:text-xs">{data.name}</p>
                <p className="text-[8px] md:text-xs">{data.name}</p>
                <p className="text-[10px] md:text-xs text-[#23CD36]">
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(data.price)}
                </p>
                {data.priceDiscount > 0 && (
                    <p className="text-[8px] md:text-xs text-[#949494] text-str line-through">
                        {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(data.priceDiscount)}
                    </p>
                )}
            </div>
            {data.priceDiscount ? (
                <div className="absolute right-[-6px] md:right-[-10px] top-[-6px] md:top-[-10px]">
                    <div className="relative">
                        <Image
                            src="/images/products/tag.png"
                            width={64}
                            height={64}
                            alt="price"
                            className="w-10 md:w-16 h-10 md:h-16"
                        />
                        <span
                            className={
                                notoSans.className +
                                " text-[6.25px] md:text-[10px] rotate-45 absolute top-[12px] md:top-[18px] right-[-2px] md:right-0 text-black font-semibold "
                            }
                        >
                            {calculateDiscountPercentage(
                                data.price,
                                data.priceDiscount
                            )}
                            % OFF
                        </span>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className="absolute right-[16px] md:right-4 top-[28px] md:top-10">
                <Image
                    src={data.iconUrl}
                    width={32}
                    height={32}
                    alt="price"
                    className="w-6 md:w-8 h-6 md:h-8"
                />
            </div>
            {selectProduct?.id == data.id && (
                <div className="absolute bg-white bottom-[-2px] right-[-2px] p-1 rounded-tl-lg rounded-br-lg">
                    <FaCheck className="w-4 h-4 text-black" />
                </div>
            )}
        </div>
    );
};
