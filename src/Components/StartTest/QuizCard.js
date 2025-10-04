import React from "react";
import { motion } from 'framer-motion';
import { useSearchParams } from "react-router-dom";
import { CategoryData } from '../../Helpers/CategoryData';
import { Code } from 'lucide-react';


function QuizCard() {

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
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ y: -8 }}
                        className="group relative w-full"
                    >
                        <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-xl z-0" />

                        <div className="block relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100">

                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={matchedItem.image}
                                    alt={matchedItem.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/20" />

                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/20">
                                        {matchedItem.category}
                                    </span>
                                </div>

                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">

                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                                        <Code className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-rose-400">{matchedItem.description}</p>
                                    </div>
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold text-green-400 leading-tight mb-4">
                                    {matchedItem.title}
                                </h2>

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

export default QuizCard;
