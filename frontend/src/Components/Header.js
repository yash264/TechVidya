import React from "react";

export default function Header() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-white flex justify-center items-center shadow-md">
                <img
                    src={require("../Assets/logic.jpg")}
                    alt="Pariksha"
                    className="h-12 md:h-40 lg:h-24 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out my-2"
                />
            </div>

        </>
    )
}