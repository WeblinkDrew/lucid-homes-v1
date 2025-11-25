"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroImage() {
    return (
        <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
        >
            <Image
                src="/Properties/Mono Amaranth.webp"
                alt="Modern Luxury Home"
                fill
                className="object-cover"
                priority
            />
        </motion.div>
    );
}
