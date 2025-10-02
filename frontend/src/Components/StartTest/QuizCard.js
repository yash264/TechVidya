import React from "react";
import { motion } from 'framer-motion';
import { useSearchParams } from "react-router-dom";
import { CategoryData } from '../../Helpers/CategoryData';


function Instructions() {

    const [searchParams] = useSearchParams();
    const path = searchParams.get("path");

    const matchedItem = CategoryData.find(
        (item) => item.path === path
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6
            }
        }
    };

    return (
        <>
            <div className="flex justify-center p-4 bg-white">

                <motion.div
                    variants={containerVariants}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ y: -8 }}
                        className="group relative"
                    >
                        <div
                            className="block relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100"
                        >
                            {/* Background Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={matchedItem.image}
                                    alt={matchedItem.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/20" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/20">
                                        {matchedItem.category}
                                    </span>
                                </div>

                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                {/* Icon and Description */}
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-300">{matchedItem.description}</p>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-4">
                                    {matchedItem.title}
                                </h2>

                                {/* Animated Underline */}
                                <div className="relative">
                                    <div className="h-0.5 w-16 bg-white/30 transition-all duration-300 group-hover:w-28 group-hover:bg-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Instructions;