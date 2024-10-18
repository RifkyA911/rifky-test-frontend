'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    const curModule = pathname.split('/');
    return (
        <div className="flex flex-col h-full w-full items-center justify-center bg-white/50 p-8 rounded-lg  ">
            <h2 className="text-3xl font-bold mb-4">Not Found</h2>
            <p className="text-center mb-8">Could not find requested resource</p>
            <Link href={curModule.length > 2 ? `/${curModule[1]}` : '/'} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg">
                Return Home
            </Link>
        </div>
    );
}
