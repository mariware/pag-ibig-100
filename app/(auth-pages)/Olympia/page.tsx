"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Olympia() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/70/Olimpia_mercado.jpg')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Olympia Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Olympia Rizal is the fourth child in the Rizal family. Known for teasing her good-naturedly, José fondly described Olympia as his stout sister. She was important in José's early romantic life, as she acted as the wingwoman between him and his first love, Segunda Katigbak, who was her schoolmate at La Concordia College. While José often visited the school, it was unclear whether he was visiting Olympia or Segunda.
          </p>
          <p>
            Olympia's marriage to Silvestre Ubaldo, a telegraph operator, marked a life of mobility as they frequently moved according to his assignments. Despite the distance, Olympia and José kept close correspondence, sharing family updates and personal news. Olympia also sometimes requested José's assistance, like when she asked him to intercede with a priest to transfer her husband's posting back to Calamba. Their exchanges embodied her trust in José, seeking his help during times of need. Sadly, Olympia died in 1887 while giving birth, which was near José's homecoming. Her untimely death left a lasting impact on José, who had a strong emotional connection with his sister.
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
