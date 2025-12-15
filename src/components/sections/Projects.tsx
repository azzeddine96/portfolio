"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("Projects");
    const projectKeys = [
        "araba", "loftyservice", "procurion", "docselect", "logidesk",
        "saas", "kanban", "booking", "marketplace"
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            setSliderWidth(containerRef.current.scrollWidth);
        }
    }, [projectKeys]);

    // Horizontal scroll logic
    const x = useMotionValue(0);

    // Limits
    const DRAG_BUFFER = 50;
    const constraintLeft = -(sliderWidth - containerWidth + DRAG_BUFFER);
    const constraintRight = 0;

    return (
        <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
                    >
                        {t("title")}
                    </motion.h2>
                    <div className="h-1.5 w-24 bg-indigo-500 rounded-full" />
                </div>

                <div className="flex gap-2 text-muted-foreground text-sm font-medium items-center">
                    <ChevronLeft className="animate-pulse" />
                    <span>Swipe to explore</span>
                    <ChevronRight className="animate-pulse" />
                </div>
            </div>

            <div ref={containerRef} className="cursor-grab active:cursor-grabbing pl-4 md:pl-[calc((100vw-80rem)/2)]">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -(projectKeys.length * 420) + (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
                    style={{ x }}
                    className="flex gap-6 md:gap-8 w-max pb-12 pr-12"
                >
                    {projectKeys.map((key, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="relative group w-[85vw] md:w-[450px] flex-shrink-0 bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7 }}
                                    src={`/images/projects/${key}.png`} // Ensure png extension is correct
                                    alt={t(`items.${key}.title`)}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-6 z-20">
                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-white bg-indigo-600/90 backdrop-blur-md rounded-full">
                                        {key.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col h-[320px]">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {t(`items.${key}.title`)}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-grow">
                                    {t(`items.${key}.description`)}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {t(`items.${key}.stack`).split(',').slice(0, 3).map((tech: string, i: number) => (
                                            <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium rounded-lg text-zinc-600 dark:text-zinc-300">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                        {t(`items.${key}.stack`).split(',').length > 3 && (
                                            <span className="px-3 py-1 bg-zinc-50 dark:bg-zinc-900 text-xs font-medium rounded-lg text-zinc-400">
                                                +{t(`items.${key}.stack`).split(',').length - 3}
                                            </span>
                                        )}
                                    </div>

                                  
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
