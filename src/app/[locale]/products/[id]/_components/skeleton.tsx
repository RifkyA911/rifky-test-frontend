import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { FaCheckCircle } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

export const ProductSkeleton = () => {
    return (
        <>
            <div className="flex flex-col w-full gap-4 relative mb-[110px]">
                <section className=" hidden absolute top-[0px] left-1/2 translate-x-[-50%] -translate-y-[0%] mx-auto md:flex flex-col gap-10 min-h-[600px] md:min-h-[1205px]  p-4 md:py-14 md:px-0">
                    <div className="flex flex-col justify-end w-full md:w-[1200px] h-[480px] relative mx-auto rounded-xl overflow-hidden">
                        <Skeleton className="w-full h-[370px] justify-center items-center" />
                        <div className="h-[177px] w-full backdrop-blur-lg bg-white/10">
                            <div className="flex w-full h-full p-8 items-center gap-4">
                                <Skeleton className="flex flex-col gap-4 w-[110px] h-[110px] justify-center items-center" />

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-full h-[30px] justify-center items-center" />
                                        <Skeleton className="w-full h-[20px] justify-center items-center" />
                                    </div>
                                    <div className="flex gap-4">
                                        <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />
                                        <Skeleton className="w-[185px]  h-[30px] justify-center items-center rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={" md:hidden w-full h-[550px] bg-gray-600"}>
                    <div className="flex flex-col gap-4 p-8 justify-center items-center">
                        <Skeleton className="w-[180px] h-[180px]" />
                        <Skeleton className="w-[185px] h-[20px] justify-center items-center rounded-xl" />

                        <Skeleton className="w-[235px] h-[40px] justify-center items-center rounded-xl" />

                        <Skeleton className="w-[185px] h-[20px] justify-center items-center rounded-xl" />

                        <div className="flex gap-4">
                            <Skeleton className="w-[135px] h-[20px] justify-center items-center rounded-xl" />
                            <Skeleton className="w-[135px]  h-[20px] justify-center items-center rounded-xl" />
                        </div>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 items-start mt-[-170px] md:mt-[560px] mx-auto w-full md:w-[1200px] p-4 md:p-0">
                    <SelectProductSkeleton />
                    <div
                        className={
                            " flex flex-col gap-5 w-full  md:max-w-[488px] z-[2]"
                        }
                    >
                        <div className="w-full md:w-[488px] h-full bg-[#282828] rounded-xl p-6 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[#3E3E3E] rounded-2xl h-[76px] w-[76px] flex items-center">
                                    <Skeleton className="w-10 h-10 text-white" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />
                                    <Skeleton className="w-[220px] h-[20px] justify-center items-center rounded-xl" />
                                    <Skeleton className="w-[145px] h-[20px] justify-center items-center rounded-xl" />
                                </div>
                            </div>
                            <Separator className="h-1 bg-[#3E3E3E]" />

                            <div className="flex flex-col gap-4 ">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Skeleton className="w-[200px] h-[50px] justify-center items-center rounded-xl" />
                                    <Skeleton className="w-[200px] h-[50px] justify-center items-center rounded-xl" />
                                </div>
                                <Skeleton className="w-full h-[50px] justify-center items-center rounded-xl" />
                                <Skeleton className="w-full h-[20px] justify-center items-center rounded-xl" />
                                <Skeleton className="w-full h-[20px] justify-center items-center rounded-xl" />
                                <Skeleton className="w-full h-[20px] justify-center items-center rounded-xl" />
                                <Skeleton className="w-[120px] h-[20px] justify-center items-center rounded-xl" />
                            </div>
                        </div>
                        <div className="md:hidden">
                            <SelectProductSkeleton />
                        </div>
                        <div className="hidden w-full md:w-[488px] h-full bg-[#282828] rounded-xl p-4 md:p-6 md:flex flex-col gap-6">
                            <Skeleton className="w-full h-[50px] justify-center items-center rounded-xl" />
                            <Skeleton className="w-full h-[50px] justify-center items-center rounded-xl" />
                        </div>

                        <div className="w-full md:w-[488px] h-full bg-[#282828] rounded-xl p-4 md:p-6 flex flex-col gap-6">
                            <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />

                            <div className="md:hidden flex flex-col gap-6">
                                <PaymentMethodCardSkeleton />
                                <Separator className="h-1 bg-[#3E3E3E] " />
                            </div>

                            <div className="md:hidden flex gap-4 justify-between p-4 rounded-xl mx-[2px] relative outline outline-2 outline-white">
                                <div className="bg-[#3E3E3E] p-3 rounded-xl w-[50px] h-[50px] flex my-auto">
                                    <IoWallet className="w-[110px] h-[30px] text-white" />
                                </div>
                                <div className={" flex flex-col gap-2"}>
                                    <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />
                                    <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />
                                    <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <div>
                                    <Skeleton className="w-full h-[40px] justify-center items-center rounded-xl" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        <Skeleton className="h-[120px] md:h-[240px] justify-center items-center rounded-xl" />
                                    </div>
                                </div>
                                <div>
                                    <Skeleton className="w-full h-[40px] justify-center items-center rounded-xl" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                        {[...Array(4)].map((_, i) => (
                                            <Skeleton
                                                key={i}
                                                className="h-[120px] md:h-[240px] justify-center items-center rounded-xl"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

const SelectProductSkeleton = () => {
    return (
        <div className="hidden md:block">
            <div className="flex flex-col gap-6 w-full md:w-[692px] md:min-h-[334px] bg-[#282828] rounded-xl p-4 md:p-6">
                <Skeleton className="w-[200px]  h-[40px] justify-center items-center rounded-xl" />

                <div className="hidden md:flex flex-col gap-6 w-full">
                    <div className="flex gap-2 px-4 py-3 items-center min-h-[56px] w-[146px] rounded-xl outline outline-1 outline-white">
                        <Skeleton className="w-[185px]  h-[50px] justify-center items-center rounded-xl" />
                    </div>
                    <Separator className="h-1 bg-[#3E3E3E]" />
                </div>
                <div className="md:hidden grid grid-cols-2 bg-[#1A1A1A] min-h-[48px]">
                    <div className="flex gap-2 items-center justify-center cursor-pointer border-b-2 border-white">
                        <Skeleton className="w-4 h-4" />
                        <Skeleton className="w-[185px]  h-[50px] justify-center items-center rounded-xl" />
                    </div>
                </div>
                <div className={" grid grid-cols-2 md:grid-cols-3 gap-4"}>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Skeleton
                            key={i}
                            className=" h-[120px] justify-center items-center rounded-xl"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const PaymentMethodCardSkeleton = () => {
    return (
        <div
            className={`flex md:flex-col gap-3 md:h-[238.53px] md:bg-[#3E3E3E] p-3 rounded-xl mx-[2px] relative cursor-pointer`}
        >
            <Skeleton className="h-[50px] w-[70px] md:h-[130.53px] md:w-full rounded-lg" />
            <div className={" flex flex-col gap-2"}>
                <Skeleton className="w-[185px]  h-[50px] justify-center items-center rounded-xl" />

                <div className="hidden md:flex md:flex-col gap-2">
                    <Skeleton className="w-full md:w-[185px]  h-[50px] justify-center items-center rounded-xl" />

                    <Skeleton className="w-full md:w-[185px]  h-[50px] justify-center items-center rounded-xl" />
                </div>
            </div>
        </div>
    );
};
