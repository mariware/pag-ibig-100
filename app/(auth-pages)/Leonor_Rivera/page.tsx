"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function LeonorRivera() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://cdn.balita.net.ph/wp-content/uploads/2023/04/Untitled-design-2023-04-11T120023.213.png')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Leonor Rivera
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl my-8 m-auto flex flex-col p-3 px-5 gap-4 text-base">
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400">
          <h3 className="text-lg font-bold">
            <LoveIcon className="text-2xl pb-1" /> About Leonor R.
          </h3>
          <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">José's childhood sweetheart, has strict parents</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Leonor Rivera</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>Taimis</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Lifespan:</span>1867 - 1893</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Birthplace:</span>Camiling, Tarlac</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nationality:</span>Filipino</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Father:</span>Antonio Rivera</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Mother:</span>Silvestra Bauzon</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Spouse:</span>Charles Henry Kipping</p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-4 text-base text-justify">
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4 text-left">Love Letters to Leonor</h3>
          <p>
            Leonor Rivera is regarded as José Rizal's “true love.” She was a distant cousin of Rizal, described as a beautiful and intelligent woman, skilled in both singing and playing some instruments. Their romance began during Rizal's medical studies at the University of Santo Tomas when he boarded at Leonor's family home in Intramuros. The relationship was kept secret by the pseudonyms like “Taimis” in her love letters.
          </p>
          <p>
            Rizal and Leonor maintained their bond through correspondence, but complications arose when Rizal went abroad in 1882. Leonor's mother, Silvestra, interfered with their long-distance relationship by intercepting his letters. Leonor was eventually convinced to marry Charles Henry Kipping, an English railway engineer. Her compliance, however, was bound with conditions that reflected her enduring love for Rizal, such as the preservation of their love letters and her refusal to play the piano. The marriage ended their 11-year relationship, leaving Rizal heartbroken and wondering if he was left on read.
          </p>
          <p>
            Leonor died in 1893 from childbirth complications. Her burial requests, including wearing the <i>saya</i> from when they had a mutual understanding, revealed her lingering attachment to Rizal. Even in his final days, Rizal remembered her in the walks they once shared and in the love letters he also kept. Rizal immortalized Leonor through the character of Maria Clara in Noli Me Tangere and El Filibusterismo.
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
              Lucero, T. S. (2023, April 11).&nbsp;
              <i>The doomed love of Jose Rizal and Leonor Rivera.&nbsp;</i>Philstar.com.&nbsp;
              <a href="https://www.philstar.com/the-freeman/opinion/2023/04/12/2258323/doomed-love-jose-rizal-and-leonor-rivera" target="_blank" rel="noopener noreferrer">
                https://www.philstar.com/the-freeman/opinion/2023/04/12/2258323/doomed-love-jose-rizal-and-leonor-rivera
              </a>
            </p>
            <p>
              Manebog, J. (2013). Colorful love affairs of Dr. Jose Rizal.&nbsp;
              <a href="https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal" target="_blank" rel="noopener noreferrer">
                https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal
              </a>
            </p>
            <p>
              Quirino, E. A. (2015, April 21). Leonor Rivera, A Hero’s Sweetheart.&nbsp;
              <a href="https://www.positivelyfilipino.com/magazine/leonor-rivera-a-heros-sweetheart" target="_blank" rel="noopener noreferrer">
                https://www.positivelyfilipino.com/magazine/leonor-rivera-a-heros-sweetheart
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
