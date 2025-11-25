"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { SmoothScrollLink } from "@/components/smooth-scroll-nav";

export function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="relative top-0 z-50 w-full bg-[#F9F9F9] pt-6 px-6">
                <div className="w-full lg:w-[75%] mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/Logo/Asset 3.svg"
                            alt="Lucid Homes Logo"
                            width={120}
                            height={40}
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Button */}
                    <Button className="hidden md:flex rounded-full px-6 py-[9px] text-[14px] font-normal bg-[#343d41] text-white hover:bg-[#343d41]/90 h-auto">
                        Get Started
                    </Button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-[#0f1112] text-white px-6 py-2 rounded-full text-sm font-medium z-50 relative"
                        >
                            {isOpen ? "Close" : "Menu"}
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 top-full mt-2 w-48 bg-[#0f1112] rounded-[24px] p-2 shadow-2xl flex flex-col gap-1 z-40 overflow-hidden"
                                >
                                    <SmoothScrollLink
                                        href="/"
                                        className="block px-4 py-2 rounded-full bg-[#343d41] text-white text-sm font-medium text-right"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </SmoothScrollLink>
                                    <SmoothScrollLink
                                        href="#properties"
                                        className="block px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 text-sm font-medium text-right transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Properties
                                    </SmoothScrollLink>
                                    <SmoothScrollLink
                                        href="#blog"
                                        className="block px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 text-sm font-medium text-right transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Blog
                                    </SmoothScrollLink>
                                    <SmoothScrollLink
                                        href="#contact"
                                        className="block px-4 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 text-sm font-medium text-right transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </SmoothScrollLink>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>
        </>
    );
}
