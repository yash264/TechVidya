import React from "react";
// import { BannerLogo } from "../Assets/banner";

function Introduction() {

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
        }
    };

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none text-center">
                            <h2 className="text-3xl font-extrabold text-sky-400 sm:text-5xl dark:text-white">
                                Welcome to TechVidya
                            </h2>

                            <p className="mt-4 text-white">
                                VidyaVaani is an AI-driven student performance prediction and guidance system that analyzes study habits, preparation strategies, and exam stress levels to provide personalized recommendations for academic improvement.
                            </p>

                            <p className="mt-4 text-white">
                                VidyaVaani aims to revolutionize education by combining AI, psychology, and ancient knowledge to create a smarter, more focused, and empowered generation.
                            </p>

                            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                                <button
                                    className="mt-8 inline-block rounded-full border bg-rose-600 hover:bg-indigo-900 px-12 py-3 text-sm font-medium text-white hover:text-white focus:ring-3 focus:outline-hidden"
                                    onClick={() => handleScroll("topicSelection")}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>

                        {/* <BannerLogo /> */}

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Introduction;