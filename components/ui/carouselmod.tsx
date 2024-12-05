"use client"

import React, { useState } from "react";
import ProfileCard from "./profilecardmod";

import LeftIcon from '@mui/icons-material/NavigateBeforeRounded';
import RightIcon from '@mui/icons-material/NavigateNextRounded';
import HeartFilledIcon from "@mui/icons-material/PersonRounded";
import HeartBorderIcon from "@mui/icons-material/PersonOutlineRounded";

const Carousel: React.FC<{
    profiles: {
        name: string;
        relation: string;
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
        <div className="w-full flex flex-col lg:flex-row-reverse h-screen justify-center">
            <div className="flex flex-col m-12 items-left lg:gap-4 justify-center">
                <h1 className="lg:max-w-lg font-bold text-4xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:pl-12">
                    Read about the Rizals.
                </h1>
                <p className="text-md lg:text-lg text-center lg:text-left lg:pl-12">
                    This is the remarkable family that raised Rizal.
                </p>
            </div>
            <div className="flex items-center justify-center mb-12 lg:my-12 p-6 relative lg:ml-12">
                <button
                    onClick={goToPrevious}
                    className="bg-rose-400 text-white dark:text-black p-2 z-10 mr-[-1rem] sm:mr-4 rounded-full hover:bg-rose-500"
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
                    <div className="flex justify-center mt-6">
                        {profiles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleIndicatorClick(index)}
                                className="h-2 w-2 sm:h-6 sm:w-6 flex justify-center items-center"
                            >
                                {index === currentIndex ? (
                                    <HeartFilledIcon
                                        className="text-rose-400" // Dark mode color
                                    />
                                ) : (
                                    <HeartBorderIcon
                                        fontSize="small"
                                        className="text-rose-400 opacity-70 dark:opacity-50" // Dark mode styles
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={goToNext}
                    className="bg-rose-400 text-white dark:text-black p-2 z-10 ml-[-1rem] sm:ml-4 rounded-full hover:bg-rose-500"
                    aria-label="Previous"
                >
                    <RightIcon />
                </button>

            </div>
        </div>
    );
};

export default Carousel;
