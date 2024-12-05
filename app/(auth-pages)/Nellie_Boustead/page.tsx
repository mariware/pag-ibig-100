"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function NellieBoustead() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://images.summitmedia-digital.com/spotph/images/files/2014/12/1419826924-Nellie-Boustead.jpg')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Nellie Boustead
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl my-8 m-auto flex flex-col p-3 px-5 gap-4 text-base">
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400">
          <h3 className="text-lg font-bold">
            <LoveIcon className="text-2xl pb-1" /> About Nellie
          </h3>
          <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">Luna's ex-fiancé and Rizal's almost wife</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Nellie Boustead</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>Nelly</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nationality:</span>French</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Father:</span>Eduardo Boustead</p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-4 text-base text-justify">
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4 text-left">Nellie Me Tangere</h3>
          <p>
            Nellie Boustead, the younger daughter of Eduardo Boustead, captured José Rizal's heart during his stay at the family's winter residence, Villa Eliada, in Biarritz in 1891. Nellie, a well-educated and morally upright woman, seemed like an ideal partner for Rizal, especially after he learned of Leonor Rivera’s marriage to Charles Henry Kipping. During Rizal’s stay, Nellie reciprocated his feelings and their relationship offered Rizal solace amidst his work on the final chapters of El Filibusterismo.
          </p>
          <p>
            Encouraged by friends such as Tomás Arejola and even Antonio Luna, her ex-fiancé, Rizal considered proposing to her. However, several obstacles hindered their union. Nellie’s mother, protective of her daughter’s future, disapproved of Rizal and doubted his capability to provide a stable life for her. Moreover, Nellie’s insistence that Rizal convert to Protestantism proved to be their biggest hindrance, as Rizal remained steadfast in his Catholic beliefs.
          </p>
          <p>
            Despite their parting, the two stayed as friends, with Nellie expressing her good wishes for Rizal in a heartfelt farewell letter. Their civil breakup signified their mutual respect and understanding of each other, even as they went separate ways.
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
              Manebog, J. (2013). Colorful love affairs of Dr. Jose Rizal.&nbsp;
              <a href="https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal" target="_blank" rel="noopener noreferrer">
                https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
