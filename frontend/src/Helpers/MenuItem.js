import React from "react";
import { motion } from "motion/react";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    onClick
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative " onClick={onClick} >
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-white hover:text-yellow-400 hover:opacity-[0.9] dark:text-white">
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}>
                    {active === item && (
                        <div
                            className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                                <motion.div
                                    layout
                                    className="w-max h-full p-4">
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative bg-neutral-700 text-white rounded-full border border-transparent shadow-input flex justify-center space-x-4 px-8 py-6">
            {children}
        </nav>
    );
};