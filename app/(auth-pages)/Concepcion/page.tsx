"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Concepcion() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/007/810/782/small_2x/vintage-grunge-texture-background-vector.jpg')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Concepcion Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Concepcion "Concha" Rizal, the eighth child in the Rizal family, holds a special place in José Rizal's heart as his beloved younger sister. José, affectionately spent his early years playing games and sharing stories with Concha, creating lasting memories of sisterly love. Their bond was deeply emotional, and José's love for her as a child highlights his caring side as a brother. The death of Concha at the age of three in 1865 profoundly affected José as it was the first time he experienced the depth of grief and loss. In his memoir, he wrote,
          </p>
          <blockquote className="italic px-8 text-stone-700 dark:text-stone-300">
            “When I was four years old, I lost my little sister Concha, and  then for the first time I shed tears caused by love and grief.”
          </blockquote>
          <p>
            This also represents the high infant mortality rate in that era, as many of José's nieces and nephews, as well as his own child, would similarly die young. The loss of Concha deepened his understanding of love and loss.
          </p>
          <button
            onClick={toggleReferences}
            className="w-fit ml-auto text-xs text-white bg-rose-400 dark:bg-rose-500 px-4 py-2 mt-4 rounded-full opacity-50 hover:opacity-100"
          >
            {showReferences ? "Hide References" : "Show References"}
          </button>
        </div>
      </div>
      {showReferences && (
        <div className="w-full bg-white dark:bg-black">
          <div className="w-full max-w-5xl pb-16 m-auto flex flex-col p-3 px-10 lg:px-5 text-xs gap-2 text-justify break-words">
            <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
            <p className="font-bold text-stone-700 dark:text-rose-400">References</p>
            <p>
              Manebog, J. (2013). Interesting tales of the Jose Rizal family.&nbsp; 
              <a href="https://www.everand.com/read/196726099/The-Interesting-Tales-of-the-Jose-Rizal-Family" target="_blank" rel="noopener noreferrer">
                https://www.everand.com/read/196726099/The-Interesting-Tales-of-the-Jose-Rizal-Family
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
