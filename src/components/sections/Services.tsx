"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/data/services";
import { Check, Mail, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming utils exists, if not I'll just use template literals or inline clsx

export default function Services() {
    const t = useTranslations("Services");
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (id: string) => {
        setSelectedServices((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const clearSelection = () => setSelectedServices([]);

    // Generate contact links
    const getContactLink = (method: "whatsapp" | "email") => {
        const serviceNames = selectedServices
            .map((id) => t(`items.${id}.title`))
            .join(", ");

        const message = `Hello, I'm interested in the following services: ${serviceNames}. Let's discuss details.`;

        if (method === "whatsapp") {
            // Replace with actual number if known, otherwise placeholder
            return `https://wa.me/212636232071?text=${encodeURIComponent(message)}`;
        } else {
            return `mailto:azzeddinefejri@gmail.com?subject=Service Inquiry&body=${encodeURIComponent(message)}`;
        }
    };

    return (
        <section id="services" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        {t("subtitle")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {SERVICES.map((service, index) => {
                        const isSelected = selectedServices.includes(service.id);
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                onClick={() => toggleService(service.id)}
                                className={cn(
                                    "cursor-pointer group relative p-6 rounded-2xl border-2 transition-all duration-300",
                                    isSelected
                                        ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-xl shadow-indigo-500/10"
                                        : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-800"
                                )}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                                        isSelected
                                            ? "bg-indigo-500 text-white"
                                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                                    )}>
                                        <service.icon size={24} />
                                    </div>
                                    <div className={cn(
                                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                                        isSelected
                                            ? "border-indigo-500 bg-indigo-500 text-white"
                                            : "border-zinc-300 dark:border-zinc-700"
                                    )}>
                                        {isSelected && <Check size={14} />}
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{t(`items.${service.id}.title`)}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {t(`items.${service.id}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Sticky/Floating Cart Summary */}
            <AnimatePresence>
                {selectedServices.length > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 p-4 z-50 pointer-events-none flex justify-center"
                    >
                        <div className="pointer-events-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl p-4 md:p-6 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <button
                                    onClick={clearSelection}
                                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg">
                                        {t("cta.selected", { count: selectedServices.length })}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {selectedServices.map(id => t(`items.${id}.title`)).join(", ").slice(0, 50)}
                                        {selectedServices.join(", ").length > 50 && "..."}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3 w-full md:w-auto">
                                <a
                                    href={getContactLink("whatsapp")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-transform active:scale-95"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href={getContactLink("email")}
                                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-transform active:scale-95"
                                >
                                    <Mail size={20} />
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
