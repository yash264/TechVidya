import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Instructions() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [loading, setLoading] = useState(false);

    const enterFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    };

    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleChange);
        return () => document.removeEventListener("fullscreenchange", handleChange);
    }, []);

    const handleChange = () => {
        if (isFullscreen) {
            // Navigate to another page 
            navigate("../testWindow",{
                state: {
                    name: name,
                }
            });
        } else {
            // Enter fullscreen
            enterFullscreen();
        }
    }

    return (
        <>
            <div className="flex justify-center p-4 rounded border border-gray-300 shadow-sm">
                <div className="flex flex-wrap w-full">

                    <div className="flex flex-wrap w-full">
                        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                            Instructions
                        </h2>

                        <p className="mt-4 text-gray-700">
                            1. For each correct answer, you are awarded +4 marks while -1 is deducted for each incorrect response.
                        </p>

                        <p className="mt-4 text-gray-700">
                            2. There is no marks for unattempted questions.
                        </p>

                        <p className="mt-4 text-gray-700">
                            3. After selecting the options Click on the Save responses otherwise the answer can't be saved.
                        </p>
                    </div>


                    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
                        <label htmlFor="name" className="block mb-2 text-gray-700 font-semibold">
                            Enter your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="Name of the Document"
                        />

                        {loading && (
                            <div className="flex justify-center my-4">
                                <div
                                    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                                    role="status"
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-center">
                            <button
                                className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-500 transition transform hover:-translate-y-1"
                                onClick={handleChange}
                            >
                                {isFullscreen ? "Start Test" : "Enter Fullscreen"}
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Instructions;