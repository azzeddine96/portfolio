"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("Projects");
    const projectKeys = ["saas", "kanban", "booking", "marketplace"];

    return (
        <section id="projects" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("title")}</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectKeys.map((key, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-background rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-indigo-500/50 transition-colors duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-indigo-900/10 dark:bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={`/images/projects/${key}.png`}
                                    alt={t(`items.${key}.title`)}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 relative z-20 bg-background">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">
                                    {t(`items.${key}.title`)}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                                    {t(`items.${key}.description`)}
                                </p>

                                <div className="mb-6 space-y-3">
                                    <div>
                                        <span className="text-xs font-semibold uppercase text-indigo-500 tracking-wider">Stack</span>
                                        <p className="font-medium text-sm">{t(`items.${key}.stack`)}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase text-indigo-500 tracking-wider">Key Features</span>
                                        <p className="font-medium text-sm text-foreground/80">{t(`items.${key}.features`)}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-indigo-500 transition-colors">
                                        <ExternalLink size={16} /> {t("viewLive")}
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-indigo-500 transition-colors">
                                        <Github size={16} /> {t("viewCode")}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
