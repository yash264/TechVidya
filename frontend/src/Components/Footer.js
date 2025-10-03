import React from "react";
import { ImLocation, ImEnvelop } from "react-icons/im";

export default function Footer() {
    return (
        <>
            <div className="w-full text-white bg-black/90 text-center py-6 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">

                    <div className="text-sm sm:text-base md:text-sm font-medium">
                        <h4>
                            © Designed, Developed & Hosted by
                            <br className="sm:hidden" />
                            National Informatics Center.
                        </h4>
                    </div>

                    <div className="md:w-1/2 lg:w-1/3 text-sm sm:text-base text-left space-y-2">
                        <p className="flex items-center gap-2">
                            <ImEnvelop className="text-base sm:text-lg" />
                            yash.20222068@mnnit.ac.in
                        </p>
                        <p className="flex items-center gap-2">
                            <ImLocation className="text-base sm:text-lg" />
                            National Institute of Technology Allahabad
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}