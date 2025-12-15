"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, Facebook, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 text-white rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/30 via-transparent to-transparent" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("title")}</h2>
                        <p className="text-zinc-300 text-lg mb-10 max-w-xl mx-auto">
                            {t("description")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="mailto:azzeddinefejri@gmail.com" className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                                <Mail size={20} /> {t("cta")}
                            </a>
                            <a href="tel:+212636232071" dir="ltr" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
                                <Phone size={20} /> +212 636 232 071
                            </a>
                        </div>

                        <div className="mt-12 flex justify-center gap-8">
                            <a href="https://www.instagram.com/azzeddine_fej/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/azouz.fej" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                                <Facebook size={24} />
                            </a>
                            <a href="https://wa.me/212636232071" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-green-500 hover:text-white transition-all transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
