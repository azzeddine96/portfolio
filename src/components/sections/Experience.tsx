"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Experience() {
    const t = useTranslations("Experience");
    const jobs = ["lofty", "quintel", "wisecam"];

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0 space-y-12 rtl:border-r-2 rtl:border-l-0 rtl:mr-4 rtl:ml-0">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 rtl:pl-0 rtl:pr-8 md:rtl:pr-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] rtl:-right-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-background group-hover:scale-150 group-hover:bg-pink-500 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                            {/* Glassmorphic Card */}
                            <div className="relative p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm hover:shadow-xl transition-all hover:bg-white/80 dark:hover:bg-zinc-900/80 hover:-translate-y-1 duration-300">
                                {/* Gradient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-500 transition-colors">
                                                {t(`jobs.${job}.role`)}
                                            </h3>
                                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
                                                <Briefcase size={16} />
                                                <span>{t(`jobs.${job}.company`)}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                                            <Calendar size={14} />
                                            <span>{t(`jobs.${job}.period`)}</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2 mt-4">
                                    {/* 
                                        We need to render the bullets. 
                                        Since we can't easily count keys with just t(), 
                                        we will blindly render 0-6 and hide if it looks like a key (contains 'jobs.'). 
                                        OR better: The user just provided the content, let's hardcode the counts per job for safety/speed 
                                        if we don't want to use useMessages().
                                        
                                        Lofty: 7 items
                                        Quintel: 6 items
                                        Wisecam: 3 items
                                    */}
                                    {(job === 'lofty' ? [0, 1, 2, 3, 4, 5, 6] : job === 'quintel' ? [0, 1, 2, 3, 4, 5] : [0, 1, 2]).map((i) => (
                                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                                            <span>{t(`jobs.${job}.achievements.${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
}
