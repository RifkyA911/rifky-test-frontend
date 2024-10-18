import {CheckCircle2, CircleAlert, FileQuestion, Frown, Loader} from 'lucide-react';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export const HandleLoading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <Loader className="h-5 w-5 animate-spin mr-3" />
                <p>Loading</p>
            </div>
        </div>
    );
};

export const HandleDataNotFound = () => {
    const t = useTranslations('MainComponents.HandleStatus.HandleDataNotFound');
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <h1 className="text-5xl text-center font-light">{t('Title')}</h1>
            <Image src="/images/404/not_found.png" alt="not-found" height={700} width={700} className="w-[600px]" />
            <p className="text-center">{t('Description')}</p>
        </div>
    );
};

export const HandleMT = () => {
    const t = useTranslations('MainComponents.HandleStatus.HandleMT');

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center gap-8">
                <FileQuestion className="w-20 h-20 mx-auto text-gray-500" />
                <h1 className="text-3xl font-bold text-center leading-9 my-4">{t('Title')}</h1>
                <p className="text-center mb-6">{t('Description')}</p>
            </div>
        </div>
    );
};

export const HandleNoData = () => {
    const t = useTranslations('MainComponents.HandleStatus.HandleNoData');

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center gap-8">
                <Frown className="w-20 h-20 mx-auto text-gray-500" />
                <h1 className="text-3xl font-bold text-center leading-9 my-4">{t('Title')}</h1>
                <p className="text-center mb-6">{t('Description')}</p>
            </div>
        </div>
    );
};

export const HandleCompNoData = () => {
    const t = useTranslations('MainComponents.HandleStatus.HandleNoData');

    return (
        <div className="flex flex-col items-center justify-center h-[400px]">
            <div className="flex flex-col items-center justify-center gap-8">
                <Frown className="w-20 h-20 mx-auto text-gray-500" />
                <h1 className="text-3xl font-bold text-center leading-9 my-4">{t('Title')}</h1>
                <p className="text-center mb-6">{t('Description')}</p>
            </div>
        </div>
    );
};

export const HandleCompNoContent = () => {
    const t = useTranslations('MainComponents.HandleStatus.HandleNoContent');

    return (
        <div className="flex flex-col items-center justify-center h-[400px]">
            <div className="flex flex-col items-center justify-center gap-8">
                <CircleAlert className="w-20 h-20 mx-auto text-cyan-500" />
                <h1 className="text-3xl font-bold text-center leading-9 my-4">{t('Title')}</h1>
                <p className="text-center mb-6">{t('Description')}</p>
            </div>
        </div>
    );
};

export const HandleSuccess = () => {
    const t = useTranslations('MainComponents.HandleStatus.HandleSuccess');

    return (
        <div className="p-8 text-black">
            <CheckCircle2 className="w-20 h-20 mx-auto text-green-500" />
            <h1 className="text-3xl font-bold text-center leading-9 my-4">{t('Title')}</h1>
            <p className="text-center mb-6">{t('Description')}</p>
        </div>
    );
};

export const HandleError = ({setStatus, href = null}: any) => {
    const t = useTranslations('MainComponents.HandleStatus.HandleError');

    return (
        <div className="p-8 text-black">
            <Frown className="w-20 h-20 mx-auto text-red-500" />
            <h1 className="text-3xl font-bold text-center leading-9 my-4">{t('Title')}</h1>
            <p className="text-center mb-6"></p>
            {href ? (
                <Link href={href} onClick={() => setStatus('initial')}>
                    {t('BtnBack')}
                </Link>
            ) : (
                <Button className="w-full" onClick={() => setStatus('initial')} variant="outline">
                    {t('BtnTryAgain')}
                </Button>
            )}
        </div>
    );
};
