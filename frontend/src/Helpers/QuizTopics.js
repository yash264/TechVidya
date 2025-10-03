import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const QuizTopics = ({ title, path, image, icon: Icon, description, category }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="group relative"
        >
            <Link
                to={`./startTest?path=${path}`}
                className="block relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100"
            >

                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/20" />

                    <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/20">
                            {category}
                        </span>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                            <ArrowRight className="w-5 h-5 text-green-400" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-3 flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-blue-400">{description}</p>
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-rose-400 leading-tight mb-4">
                        {title}
                    </h2>

                    <div className="relative">
                        <div className="h-0.5 w-16 bg-white/30 transition-all duration-300 group-hover:w-28 group-hover:bg-white" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};