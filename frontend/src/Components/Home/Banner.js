import React from "react";
import Introduction from "../../Helpers/Introduction";
import { Meteors } from "../../Helpers/Meteors";

function Banner() {
    return (
        <div className="relative h-[40rem] w-full">
            <div
                className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div
                className="relative flex h-full flex-col items-start justify-center overflow-hidden rounded border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
 
                {/* Intro part */}
                <Introduction />

                {/* Meteor effect */}
                <Meteors />
            </div>
        </div>
    );
}

export default Banner;