import React from "react";
import Introduction from "../../Helpers/Introduction";
import { Meteors } from "../../Helpers/Meteors";
import { BannerLogo } from "../../Assets/bannerLogo";

function Banner() {
    return (
        <div className="relative h-[50rem] w-full">
            <div
                className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div
                className="relative flex h-full flex-col justify-center overflow-hidden rounded border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">

                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 pt-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center md:gap-8">
                        <div>
                            <Introduction />
                        </div>

                        <div>
                            <BannerLogo />
                        </div>
                    </div>
                </div>

                <Meteors />
            </div>
        </div>
    );
}

export default Banner;