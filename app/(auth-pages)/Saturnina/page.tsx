"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Saturnina() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/78/Saturnina_mercado.jpg')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Saturnina Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Saturnina Rizal or “Ate Neneng” is the eldest sibling of José Rizal. She contributed to José's early education alongside their mother, helping him master the alphabet by the age of three. She cheered him up during difficult times, such as by bringing him to Tanauan in 1873 to alleviate his sadness while their mother was unjustly imprisoned. Saturnina's thoughtfulness also manifested in her financial support, like offering a diamond ring in 1882 and contributing 100 pesos to José's academic expenses in 1885.
          </p>
          <p>
            Saturnina's devotion was evident in her engagement with José throughout his life. She and her husband, Manuel Hidalgo, faced consequences of their association with José, including Hidalgo's deportation during the Calamba agrarian conflict. Despite that, Saturnina preserved José's legacy by publishing a Tagalog translation of Noli Me Tangere in 1909 and inspiring his artistic endeavors, including an oil painting of her that now resides in the Rizal Shrine. Her sacrifices showcase her sibling love and her integral role in the Rizal family's legacy.
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
