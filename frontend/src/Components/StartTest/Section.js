import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FullScreenToggle from "../../Helpers/FullScreenToggle";

function Section() {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const categoryMap = {
        science_and_technology: "Science & Technology",
        health_and_wellness: "Health & Wellness",
        logic_and_brain_teasers: "Logic & Brain Teasers",
        entertainment_and_media: "Entertainment & Media",
        geography_and_environment: "Geography & Environment",
        sports_and_games: "Sports & Games",
    };

    const [searchParams] = useSearchParams();
    const path = searchParams.get("path");

    const category = categoryMap[path];

    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-prose md:max-w-none">

                                <div>
                                    <h2>Selected Category: {category}</h2>
                                    {/* Use category to fetch AI quiz */}
                                </div>

                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                    Instructions
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    1. For each correct answer, you are awarded +4 marks while -1 is deducted for each incorrect response.
                                </p>

                                <p className="mt-4 text-gray-700">
                                    2. There is no marks for unattempted questions.
                                </p>

                                2. After selecting the options Click on the Save responses otherwise the answer can't be saved.
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center p-4 rounded border border-gray-300 shadow-sm">
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full px-2 mb-4">
                                        <label htmlFor="document" classdocument="block mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="document"
                                            // value={formData.document}
                                            // onChange={handleChange}
                                            className="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Name of the Document"
                                        />
                                    </div>

                                    {loading && (
                                        <div className="flex justify-center w-full">
                                            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )}

                                    <FullScreenToggle />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Section;