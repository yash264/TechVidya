import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, MinusCircle, User, Loader2 } from "lucide-react";

function Instructions() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const navigate = useNavigate();

    const enterFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    };

    useEffect(() => {
        const handleChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener("fullscreenchange", handleChange);
        return () => document.removeEventListener("fullscreenchange", handleChange);
    }, []);

    const handleChange = () => {
        if (!isFullscreen) enterFullscreen();
        else {
            navigate("../testWindow");
        }
    };

    return (
        <>
            {/* Instructions Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-200 p-8 relative overflow-hidden"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    📘 Quiz <span className="text-indigo-600">Instructions</span>
                </h2>
                <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-8 h-8 text-green-500 mt-1" />
                        <p className="text-gray-700">
                            <span className="font-semibold">+4 marks</span> will be awarderd for each correct answer and
                            <span className="font-semibold text-red-500"> -1 mark</span> will be deducted for each incorrect response.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <MinusCircle className="w-6 h-6 text-gray-500 mt-1" />
                        <p className="text-gray-700">There is <span className="font-semibold">no marks</span> for unattempted questions.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <XCircle className="w-6 h-6 text-yellow-500 mt-1" />
                        <p className="text-gray-700">Make sure to <span className="font-semibold">attempt the test</span> within a time limit of <span className="font-semibold text-red-500">5 minutes</span>.</p>
                    </li>
                </ul>

                {isFullscreen && (
                    <div className="w-full mt-4 flex justify-center items-center space-x-2">
                        <User className="w-6 h-6 text-indigo-600" />
                        <p className="text-gray-400 italic opacity-90">
                            Hi user, Are you ready?
                        </p>
                    </div>
                )}


                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleChange}
                    className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-500 transition"
                >
                    {isFullscreen ? "🚀 Start Test" : "⛶ Enter Fullscreen"}
                </motion.button>

                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-200 via-purple-100 to-transparent rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>
        </>
    );
}

export default Instructions;
