"use client"

import React, { useState } from "react";
import ProfileCard from "./profilecard";

import LeftIcon from '@mui/icons-material/NavigateBeforeRounded';
import RightIcon from '@mui/icons-material/NavigateNextRounded';
import HeartFilledIcon from "@mui/icons-material/FavoriteRounded";
import HeartBorderIcon from "@mui/icons-material/FavoriteBorderRounded";

const Carousel: React.FC<{
    profiles: {
        firstName: string;
        lastName: string;
        age: number | string | null;
        nationality: string;
        location: string;
        imageUrl: string;
        link: string;
    }[];
}> = ({ profiles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleIndicatorClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-rose-400 text-white dark:text-black w-full flex flex-col lg:flex-row h-screen justify-center">
            <div className="flex flex-col m-12 items-left lg:gap-4 justify-center">
                <h1 className="lg:max-w-lg font-bold text-4xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left">
                   Meet the women in Rizal's life.
                </h1>
                <p className="text-md lg:text-lg text-center lg:text-left">
                    Our national hero is an intervational lover boy.
                </p>
            </div>
            <div className="bg-rose-400 flex items-center justify-center lg:my-12 p-6 relative">
                <button
                    onClick={goToPrevious}
                    className="bg-white text-rose-400 p-2 mr-4 rounded-full shadow-md hover:bg-rose-300"
                    aria-label="Previous"
                >
                    <LeftIcon />
                </button>

                <div>

                    {/* Profile Card */}
                    <div className="relative flex justify-center items-center overflow-hidden">
                        <div className="w-full">
                            <ProfileCard {...profiles[currentIndex]} />
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-6 space-x-3">
                        {profiles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleIndicatorClick(index)}
                                className="h-6 w-6 flex justify-center items-center"
                            >
                                {index === currentIndex ? (
                                    <HeartFilledIcon fontSize="small" style={{ color: "white" }} />
                                ) : (
                                    <HeartBorderIcon
                                        fontSize="small"
                                        style={{ color: "rgba(255, 255, 255, 0.5)" }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={goToNext}
                    className="bg-white text-rose-400 p-2 ml-4 rounded-full shadow-md hover:bg-rose-300"
                    aria-label="Previous"
                >
                    <RightIcon />
                </button>

            </div>
        </div>
    );
};

export default Carousel;
