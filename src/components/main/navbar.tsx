"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { GB, ID } from "country-flag-icons/react/3x2";

import { Separator } from "@/components/ui/separator";
import { ChevronDown, Menu, X } from "lucide-react";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";
import { IoLogIn, IoSearchSharp } from "react-icons/io5";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { PiTicket } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export interface IMenuItems {
    title: string;
    href: string;
    icons: JSX.Element;
    dropdown?: IMenuItems[];
}
export const menuItems: IMenuItems[] = [
    { title: "navbar.links.0", href: "/", icons: <HiOutlineHome /> },
    {
        title: "navbar.links.1",
        href: "/order-tracker",
        icons: <IoSearchSharp />,
    },
    { title: "navbar.links.2", href: "/products", icons: <TbDeviceGamepad2 /> },
    { title: "navbar.links.3", href: "/price-list", icons: <FaListUl /> },
    { title: "navbar.links.4", href: "/reviews", icons: <MdOutlineChat /> },
    { title: "navbar.links.5", href: "/news", icons: <HiOutlineNewspaper /> },
    { title: "navbar.links.6", href: "/ticket-hoki", icons: <PiTicket /> },
];

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const t = useTranslations();
    const pathname = usePathname();
    const locale = useLocale();

    const [logged, setLogged] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    useEffect(() => {
        console.log("Theme", theme);
        setIsMounted(true);
        setLogged(getCookie("ACC.TOKEN") ? true : false);
    }, [theme]);

    const activeClass = "font-semibold text-cyan-500 hover:text-white";

    if (!isMounted) return null;
    return (
        <nav className="w-screen navbar fixed top-0 shadow z-[100] bg-[#282828] zzzzzmax-h-[144px]">
            <div className="grid grid-rows-1 md:grid-rows-2">
                <div className="md:w-[1200px] px-4 py-6 md:p-0 mx-auto grid grid-cols-2 md:grid-cols-12 justify-between">
                    <Link
                        href="/"
                        className="md:col-span-2 flex gap-4 items-center"
                    >
                        <Image
                            alt="Nav Logo"
                            src="/images/navbar-logo.png"
                            height={100}
                            width={100}
                            className="w-[60px] h-[40px]"
                        />
                        <h1 className="font-bold text-white">GameManiac</h1>
                    </Link>
                    <div className="flex md:col-span-10  items-center gap-4 py-2">
                        <div className="flex w-full items-center space-x-2 relative">
                            {!isSearchActive && (
                                <div
                                    className="cursor-pointer ml-auto"
                                    onClick={() =>
                                        setIsSearchActive((prev) => !prev)
                                    }
                                >
                                    <IoSearchSharp className="w-6 h-6 transition-transform duration-300 text-white" />
                                </div>
                            )}

                            <div
                                className={`absolute right-0 ${
                                    isSearchActive
                                        ? "translate-x-0 opacity-100 pointer-events-auto"
                                        : "translate-x-full opacity-0 pointer-events-none"
                                } transition-all duration-300 ease-in-out w-full`}
                            >
                                <div className="relative">
                                    <Input
                                        placeholder={t("navbar.search")}
                                        className="w-full bg-white/10 rounded-full text-white"
                                    />
                                    <X
                                        onClick={() =>
                                            setIsSearchActive((prev) => !prev)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        <Separator
                            orientation="vertical"
                            className="hidden md:block bg-[#3E3E3E]"
                        />
                        <div className="hidden md:flex items-center space-x-2">
                            <Label htmlFor="theme-mode">
                                {resolvedTheme === "light" ? (
                                    <FiSun className="w-6 h-6 transition-all text-white" />
                                ) : (
                                    <FiMoon className="w-6 h-6 transition-all text-white" />
                                )}
                            </Label>
                            <Switch
                                id="theme-mode"
                                checked={theme === "dark"}
                                onCheckedChange={(checked) => {
                                    setTheme(checked ? "dark" : "light");
                                }}
                            />
                        </div>
                        <Separator
                            orientation="vertical"
                            className="hidden md:block bg-[#3E3E3E]"
                        />
                        {logged ? (
                            <>
                                <Link
                                    href={"/profile"}
                                    className="hidden md:block bg-primary py-2 px-3 text-white rounded-lg"
                                >
                                    Username
                                </Link>
                            </>
                        ) : (
                            <Link
                                href={"/auth/login"}
                                className="hidden md:flex gap-2 items-center py-2 px-3 text-white rounded-lg"
                            >
                                <span className="bg-white/10 rounded-lg p-2">
                                    <IoLogIn className="w-5 h-5" />
                                </span>
                                <span>{t("navbar.auth")}</span>
                            </Link>
                        )}
                        <Separator
                            orientation="vertical"
                            className="hidden md:block bg-[#3E3E3E]"
                        />
                        <div className="hidden md:block">
                            <Internationalization />
                        </div>
                        {/* Icon Burger Menu untuk Mobile */}
                        <Button
                            variant="ghost"
                            className="md:hidden justify-end "
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} className="text-red-400" />
                            ) : (
                                <Menu size={24} className="text-white" />
                            )}
                        </Button>
                    </div>
                </div>

                {openDropdown !== null && (
                    <div
                        className="fixed top-0 left-0 w-full h-full"
                        onClick={() => setOpenDropdown(null)}
                    />
                )}

                <div className="hidden md:flex items-center justify-between w-full py-4 border-t border-[#3E3E3E]">
                    <div className="w-[1200px] mx-auto md:flex items-center justify-between p-0">
                        <ul className=" flex gap-4 text-sm">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative">
                                    <Link href={item.href}>
                                        <div
                                            className={cn(
                                                "text-white group inline-flex gap-2 items-center justify-center rounded-md  transition-colors hover:bg-accent hover:text-accent-foreground",
                                                {
                                                    [activeClass]:
                                                        pathname ===
                                                        `/${locale}${item.href}`,
                                                }
                                            )}
                                        >
                                            {item.icons}
                                            {t(item.title)}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <MdOutlineKeyboardDoubleArrowRight className="text-white group inline-flex gap-2 items-center justify-center rounded-md  transition-colors hover:bg-accent hover:text-accent-foreground" />
                    </div>
                </div>

                {/* Menu untuk Mobile */}
                <div
                    className={`${
                        isMobileMenuOpen ? "min-h-[100vh] " : "max-h-0"
                    } w-full fixed top-[100px] right-0 overflow-hidden shadow-xl transition-max-height duration-300 ease-in-out md:hidden bg-[#282828] `}
                >
                    <ul className="flex flex-col">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>
                                    <div
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={cn(
                                            "group inline-flex h-10 gap-2 items-center justify-start bg-background w-full p-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground",
                                            {
                                                [activeClass]:
                                                    pathname ===
                                                    `/${locale}${item.href}`,
                                            }
                                        )}
                                    >
                                        {item.icons}
                                        {t(item.title)}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center w-full md:hidden p-2">
                        <Internationalization />
                    </div>
                    <div className="flex justify-center md:hidden items-center gap-4">
                        {logged ? (
                            <>
                                <Link
                                    href={"/"}
                                    className="bg-primary py-2 px-3 rounded-lg"
                                >
                                    Username
                                </Link>
                            </>
                        ) : (
                            <Link
                                href={"/auth/login"}
                                className="flex gap-2 items-center py-2 px-3 rounded-lg"
                            >
                                <span className="bg-white rounded-lg p-2">
                                    <IoLogIn className="w-5 h-5 " />
                                </span>
                                <span className="text-white">
                                    {t("navbar.auth")}
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
export const Internationalization = () => {
    //   const t = useTranslations("Navbar");
    const locale = useLocale();
    const pathname = usePathname().replace(/\/[^/]+/, "");
    const router = useRouter();

    const changeLocale = (newLocale: string) => {
        router.push(`/${newLocale}${pathname}`);
        router.refresh();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md px-4 py-2 transition-colors hover:text-black hover:text-accent-foreground">
                    {locale === "id" ? (
                        <ID title="Indonesia" className="w-6 h-6 rounded-lg" />
                    ) : (
                        <GB title="UK" className="w-6 h-6 rounded-lg" />
                    )}
                    <p className="text-white text-base font-normal uppercase text-nowrap">
                        <span className="text-white">{locale}</span>-
                        <span className="text-white/60">{locale}</span>
                    </p>{" "}
                    <ChevronDown className="ml-2 text-white" size={24} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 z-[19999]">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuItem
                    className={cn("w-full z-[19999] hover:text-white", {
                        "bg-cyan-400": locale === "id",
                    })}
                >
                    <button
                        className="w-full"
                        onClick={() => changeLocale("id")}
                    >
                        <div className="flex items-center gap-2">
                            <ID
                                title="Indonesia"
                                className="w-6 h-6 rounded-lg"
                            />
                            <span className="font-bold">ID</span>
                        </div>
                    </button>
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={cn("w-full z-[19999] hover:text-white", {
                        "bg-cyan-400 text-white font-semibold": locale === "en",
                    })}
                >
                    <button
                        className="w-full"
                        onClick={() => changeLocale("en")}
                    >
                        <div className="flex items-center gap-2">
                            <GB title="UK" className="w-6 h-6 rounded-lg" />
                            <span className="">EN</span>
                        </div>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
