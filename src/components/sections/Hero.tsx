"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 md:pt-0 relative overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-background to-background" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center"
            >
                <div className="order-2 md:order-1 text-center md:text-start rtl:md:text-right mx-auto md:mx-0 max-w-lg md:max-w-none">
                    <h2 className="text-sm md:text-base font-semibold tracking-wider text-indigo-500 uppercase mb-4">
                        {t("role")}
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-white">
                        {t("greeting")} <br /> <span className="text-indigo-600 dark:text-indigo-400">Azzeddine</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        {t("description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start rtl:md:justify-start mt-8">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors whitespace-nowrap shadow-lg shadow-indigo-500/20"
                        >
                            {t("viewProjects")} <ArrowRight size={18} className="rtl:rotate-180" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Azzeddine%20fejri%20-fr.pdf"
                            download="Azzeddine_Fejri_Resume.pdf"
                            className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 font-medium flex items-center justify-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors whitespace-nowrap text-foreground"
                        >
                            {t("downloadResume")} <Download size={18} />
                        </motion.a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="order-1 md:order-2 relative mx-auto md:mx-0 flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-8 border-white/50 dark:border-zinc-800/50 shadow-2xl">
                        <img
                            src="/images/profile.jpg"
                            alt="Azzeddine"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Glowing effect behind */}
                    <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 -z-10 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
