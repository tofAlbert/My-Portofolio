import React, { useState } from "react";
import "./first.Page.css";

export function AboutPage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`input ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2>
                ABOUT
            </h2>
            {isHovered && (
                <div className="description">
                    <button className="btn">Click me</button>
                </div>
            )}
        </div>
    );
}
