"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, Globe, Sparkles, CheckCircle2, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Calendly Booking Section — Popup Widget
 *
 * Uses Calendly's external popup widget for a clean UX.
 * The user clicks the CTA → Calendly opens as a modal overlay.
 *
 * Recommended Calendly availability configuration:
 * - Working hours: 08:00 – 22:00
 * - Mon, Tue, Thu, Sun: Block 18:00–20:00
 * - Friday: Block 12:00–15:00
 *
 * Configure these rules in your Calendly dashboard → Availability.
 */
const CALENDLY_URL = "https://calendly.com/azzeddinefejri/30min";

export default function Booking() {
    const t = useTranslations("Booking");

    // Load Calendly widget assets
    useEffect(() => {
        if (document.getElementById("calendly-css")) return;

        const link = document.createElement("link");
        link.id = "calendly-css";
        link.rel = "stylesheet";
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.id = "calendly-js";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const openCalendly = useCallback(() => {
        if (typeof window !== "undefined" && (window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
            // Fallback: open in new tab if script hasn't loaded
            window.open(CALENDLY_URL, "_blank");
        }
    }, []);

    const details = [
        { icon: Clock, label: t("durationLabel"), value: t("duration") },
        { icon: Video, label: t("formatLabel"), value: t("format") },
        { icon: Globe, label: t("availabilityLabel"), value: t("availability") },
        { icon: Sparkles, label: t("costLabel"), value: t("cost") },
    ];

    return (
        <section id="booking" className="py-16 md:py-24 px-4 bg-gradient-to-b from-indigo-950 via-zinc-950 to-zinc-950 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-600/8 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 mb-5">
                        <Calendar size={28} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
                        {t("title")}
                    </h2>
                    <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-5" />
                    <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Card Layout */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left — Meeting Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-zinc-700/50 rounded-2xl md:rounded-3xl p-6 md:p-8"
                    >
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {details.map(({ icon: Icon, label, value }) => (
                                <div key={label} className="bg-white/5 rounded-xl p-4">
                                    <Icon size={18} className="text-indigo-400 mb-2" />
                                    <p className="text-xs text-zinc-500 mb-1">{label}</p>
                                    <p className="text-sm font-semibold text-white">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={openCalendly}
                            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-indigo-500/25"
                        >
                            <Calendar size={20} />
                            {t("cta")}
                        </motion.button>
                    </motion.div>

                    {/* Right — Topics */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-zinc-700/50 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col"
                    >
                        <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                            {t("topics.title")}
                        </h3>
                        <div className="space-y-4 flex-grow">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 shrink-0" />
                                    <p className="text-sm md:text-base text-zinc-300">{t(`topics.${i}`)}</p>
                                </div>
                            ))}
                        </div>

                        {/* Fallback CTA */}
                        <div className="mt-8 pt-6 border-t border-zinc-700/50">
                            <p className="text-zinc-500 text-sm mb-2">{t("fallbackText")}</p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-sm"
                            >
                                <Mail size={15} />
                                {t("fallbackCta")}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
