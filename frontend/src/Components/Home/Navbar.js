import React, { useState } from "react";
import { Menu, MenuItem } from "../../Helpers/MenuItem";
import { cn } from "../../utils";

function Navbar({ className }) {
    const [active, setActive] = useState(null);

    const handleScroll = (sectionId) => {
        setActive(sectionId);
        const section = document.getElementById(sectionId);
        
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} onClick={() => handleScroll("home")} active={active} item="Home">
                </MenuItem>

                <MenuItem setActive={setActive} onClick={() => handleScroll("features")} active={active} item="Features">
                </MenuItem>

                <MenuItem setActive={setActive} onClick={() => handleScroll("topicSelection")} active={active} item="Topics Selection">
                </MenuItem>

                <MenuItem setActive={setActive} onClick={() => handleScroll("about")} active={active} item="About">
                </MenuItem>

            </Menu>
        </div>
    );
}

export default Navbar;