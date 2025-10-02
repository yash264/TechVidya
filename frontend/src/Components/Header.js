import React from "react";

export default function Header() {
    return (
        <>
            <div className="w-full bg-white flex justify-center items-center shadow-md mb-4">
                <img
                    src={require("../Assets/techVidya.png")}
                    alt="Pariksha"
                    className="h-12 md:h-40 lg:h-24 rounded-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                />
            </div>

        </>
    )
}