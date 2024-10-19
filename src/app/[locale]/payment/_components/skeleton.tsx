import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const PendingSkeleton = () => {
    return (
        <div className="flex flex-col gap-8 md:gap-5 w-full md:w-[793px]  items-center">
            <div className="flex w-full flex-col items-center bg-[#282828] rounded-t-xl">
                <div
                    className={
                        " flex flex-col md:flex-row w-full gap-5 md:items-center justify-between p-4 md:py-5 md:px-8 md:bg-[#3E3E3E] rounded-t-xl"
                    }
                >
                    <div className="flex flex-col gap-2">
                        <Skeleton className="w-[185px] h-[15px] justify-center items-center rounded-xl" />

                        <Skeleton className="w-[185px] h-[20px] justify-center items-center rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Skeleton className="w-[185px] h-[15px] justify-center items-center rounded-xl" />

                        <div className="flex items-center gap-2">
                            <Skeleton className="w-[185px] h-[20px] justify-center items-center rounded-xl" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Skeleton className="w-[185px] h-[15px] justify-center items-center rounded-xl" />

                        <Skeleton className="w-[185px] h-[20px] justify-center items-center rounded-xl" />
                    </div>
                </div>
                <Separator className="md:hidden bg-[#3E3E3E]" />

                <div className="w-full flex flex-col p-4 md:py-5 md:px-8 ">
                    <div className={" flex gap-6 items-center"}>
                        <Skeleton className="w-20 h-20 rounded-xl" />
                        <div className="flex flex-col gap-2">
                            <Skeleton className="w-[245px] h-[40px] justify-center items-center rounded-xl" />

                            <Skeleton className="w-[215px] h-[20px] justify-center items-center rounded-xl" />
                        </div>
                    </div>
                </div>
                <Separator className=" bg-[#3E3E3E]" />
                <div className="p-4 w-full ">
                    <Skeleton className="w-[300px] mr-auto h-[30px] rounded-xl" />
                </div>
                <div className="flex w-full gap-4">
                    <div className="flex flex-col w-full justify-start gap-2 p-4">
                        <Skeleton className="w-[170px] h-[15px] rounded-xl" />
                        <Skeleton className="w-[300px] h-[30px] mb-2 rounded-xl" />
                        <Skeleton className="w-[170px] h-[15px] rounded-xl" />
                        <Skeleton className="w-[300px] h-[30px] mb-2 rounded-xl" />
                        <Skeleton className="w-[170px] h-[15px] rounded-xl" />
                        <Skeleton className="w-[300px] h-[30px] mb-2 rounded-xl" />
                        <Skeleton className="w-[170px] h-[15px] rounded-xl" />
                        <Skeleton className="w-[300px] h-[30px] mb-2 rounded-xl" />
                    </div>
                    <div className="flex flex-col w-full justify-start gap-2 p-4">
                        <Skeleton className="w-[170px] h-[15px] rounded-xl" />
                        <Skeleton className="w-[300px] h-[30px] mb-2 rounded-xl" />
                        <Skeleton className="w-[170px] h-[15px] rounded-xl" />
                        <Skeleton className="w-[300px] h-[30px] mb-2 rounded-xl" />
                        <Skeleton className="w-[170px] h-[15px] rounded-xl" />
                        <Skeleton className="w-[300px] h-[30px] mb-2 rounded-xl" />
                    </div>
                </div>
                <div
                    className={
                        "flex flex-row md:grid md:grid-cols-2 gap-4 w-full p-4 md:py-5 md:px-8 bg-white text-black rounded-b-xl"
                    }
                >
                    <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />

                    <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />

                    <div className="flex gap-4 items-center">
                        <Skeleton className="w-[185px] h-[30px] justify-center items-center rounded-xl" />
                    </div>
                </div>
            </div>
            <Skeleton
                className={
                    " w-full flex gap-2 bg-[#282828] py-5 px-8 rounded-xl font-semibold"
                }
            ></Skeleton>
        </div>
    );
};
