import React from 'react';
import { motion } from 'framer-motion';

const PricingContact = () => {
    return (
        <section className="py-24 bg-[#FDFCF9] dark:bg-dark-900 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Playfair_Display'] font-medium text-slate-900 dark:text-dark-100 mb-4"
                    >
                        Connect for custom pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-dark-200 text-[11px] leading-relaxed"
                    >
                        Submit your details for a precise quote. Our team will review and respond with tailored pricing.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 dark:text-dark-600 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-6 py-3 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-dark-100 transition-all shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">Business Email</label>
                                <input
                                    type="email"
                                    placeholder="email@website.com"
                                    className="w-full px-6 py-3 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-dark-100 transition-all shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">Project Overview</label>
                                <textarea
                                    placeholder="Type your message..."
                                    rows="4"
                                    className="w-full px-6 py-3 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-dark-100 transition-all resize-none shadow-sm"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-blue-600 text-white rounded-xl text-[11px] font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300"
                            >
                                Send message
                            </button>
                        </form>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-dark-700"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                                alt="Team Meeting"
                                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                            />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-8 px-4">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-bold text-slate-900 dark:text-dark-100 uppercase tracking-widest">Sales support</h4>
                                <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-[11px]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <span>+1 (555) 000-0000</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-bold text-slate-900 dark:text-dark-100 uppercase tracking-widest">Online channels</h4>
                                <div className="flex items-center gap-3 text-slate-400 dark:text-dark-600">
                                    <a href="#" className="hover:text-blue-600 transition-colors">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    <a href="#" className="hover:text-blue-600 transition-colors">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingContact;
