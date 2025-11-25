"use client";

import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
};

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    fullWidth = false
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, ...directions[direction] },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 2.0,
                        ease: [0.22, 1, 0.36, 1], // Very smooth ease-out (Framer style)
                        delay: delay,
                    },
                },
            }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({
    children,
    className,
    faster = false
}: {
    children: React.ReactNode;
    className?: string;
    faster?: boolean;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 2.0,
                        ease: [0.22, 1, 0.36, 1] // Matching smooth ease-out
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
