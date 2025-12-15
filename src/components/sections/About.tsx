"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    Code2, Database, Layout, Zap, BarChart, Bot,
    CheckCircle2, Lightbulb, Users, Rocket, Trophy
} from "lucide-react";

// Duplicate skills for infinite scroll
const SKILLS = [
    "PHP", "JavaScript", "SQL", "React.js", "Next.js", "Vue 3", "Redux", "Tailwind CSS",
    "Laravel", "Symfony", "Node.js", "Express.js", "Socket.IO", "MySQL", "PostgreSQL",
    "MongoDB", "Redis", "Docker", "AWS", "Git", "CI/CD"
];
const MARQUEE_SKILLS = [...SKILLS, ...SKILLS]; // Duplicate for seamless loop

const ICONS: Record<string, any> = {
    saas: Layout,
    multitenant: Users,
    billing: Database,
    dashboards: BarChart,
    ai: Bot,
    performance: Zap
};

export default function About() {
    const t = useTranslations("About");
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-20 relative"
                >
                    <motion.div style={{ y }} className="absolute -top-20 -left-20 text-9xl font-bold opacity-5 pointer-events-none select-none">
                        ABOUT
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                        {t("title")}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                        {t("description")}
                    </p>
                </motion.div>

                {/* What I Do Best - Grid */}
                <div className="mb-24">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-px w-10 bg-indigo-500/50" />
                        <h3 className="text-2xl font-bold text-center text-foreground uppercase tracking-wider text-sm">
                            {t("whatIDoTitle")}
                        </h3>
                        <div className="h-px w-10 bg-indigo-500/50" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {["saas", "multitenant", "billing", "dashboards", "ai", "performance"].map((item, index) => {
                            const Icon = ICONS[item] || Code2;
                            return (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-500">
                                        <Icon size={120} />
                                    </div>

                                    <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>

                                    <h4 className="font-bold text-xl mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {t(`services.${item}.title`)}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed relative z-10">
                                        {t(`services.${item}.desc`)}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Infinite Text Marquee - Skills */}
                <div className="mb-24 full-width relative" dir="ltr">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10" />

                    <div className="mb-8 text-center" dir="rtl">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-widest uppercase">
                            {t("skillsTitle")}
                        </span>
                    </div>

                    <div className="flex overflow-hidden py-4 group">
                        <div className="flex animate-scroll hover:pause gap-8 shrink-0 min-w-full">
                            {MARQUEE_SKILLS.map((skill, index) => (
                                <div
                                    key={`${skill}-${index}`}
                                    className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-indigo-500 transition-colors cursor-default"
                                >
                                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                    <span className="font-bold text-zinc-700 dark:text-zinc-200">{skill}</span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for seamless visual loop if content isn't wide enough, though animate-scroll usually handles the track. 
                             Standard Tailwind 'animate-scroll' needs a duplicate track. */}
                        <div className="flex animate-scroll hover:pause gap-8 shrink-0 min-w-full" aria-hidden="true">
                            {MARQUEE_SKILLS.map((skill, index) => (
                                <div
                                    key={`dup-${skill}-${index}`}
                                    className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-indigo-500 transition-colors cursor-default"
                                >
                                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                    <span className="font-bold text-zinc-700 dark:text-zinc-200">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Value Add - Cards */}
                <div className="relative">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold mb-4">{t("valueTitle")}</h3>
                        <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col p-6 bg-white dark:bg-zinc-900 rounded-2xl border-l-4 border-indigo-500 shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="mb-4 text-indigo-500">
                                    <CheckCircle2 size={32} />
                                </div>
                                <p className="text-lg font-medium text-foreground">
                                    {t(`values.${i}`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
