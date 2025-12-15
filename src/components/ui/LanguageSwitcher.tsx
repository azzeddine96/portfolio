"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        // Remove the current locale from the pathname and replace it
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm p-1 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <Globe size={14} className="text-muted-foreground ml-2 rtl:hidden" />
            <Globe size={14} className="text-muted-foreground mr-2 hidden rtl:block" />

            <div className="flex text-xs font-medium">
                <button
                    onClick={() => switchLocale("en")}
                    className={`px-3 py-1 rounded-full transition-colors ${locale === "en" ? "bg-indigo-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                >
                    EN
                </button>
                <button
                    onClick={() => switchLocale("fr")}
                    className={`px-3 py-1 rounded-full transition-colors ${locale === "fr" ? "bg-indigo-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                >
                    FR
                </button>
                <button
                    onClick={() => switchLocale("ar")}
                    className={`px-3 py-1 rounded-full transition-colors ${locale === "ar" ? "bg-indigo-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                >
                    عربي
                </button>
            </div>
        </div>
    );
}
