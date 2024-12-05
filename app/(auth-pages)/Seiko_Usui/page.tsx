"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function SeikoUsui() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://talambuhay.net/wp-content/uploads/2023/10/image-6.png')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Seiko Usui
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl my-8 m-auto flex flex-col p-3 px-5 gap-4 text-base">
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400">
          <h3 className="text-lg font-bold">
            <LoveIcon className="text-2xl pb-1" /> About Seiko
          </h3>
          <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">チョジの花のように 🌸</p>
          <p className="text-sm lg:text-base opacity-50 text-black dark:text-stone-200">Translation: Like a Choji flower 🌸</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Seiko Usui</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>O-Sei</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Lifespan:</span>1867 - 1947</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Birthplace:</span>Japan</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nationality:</span>Japanese</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Spouse:</span>Alfred Charlton</p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-4 text-base text-justify">
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4 text-left">Sayonara, Sayonara!</h3>
          <p>
            During his short stay in Japan in 1888, José Rizal nurtured a tender romance with Seiko Usui, whom he affectionately called “O-Sei-San.” Their relationship blossomed as Seiko served as Rizal's guide and tutor, introducing him to Japanese culture, language, and notable landmarks. The two shared a deep intellectual and artistic connection. Rizal was captivated by Seiko's grace, intelligence, and modesty. Seiko, in turn, admired the Filipino doctor.
          </p>
          <p>
            However, Rizal's commitment to his country led him to leave Japan. He deeply regretted this decision because he had to abandon his happiness with Seiko. Despite their parting, Rizal cherished her memory and dedicated heartfelt reflections to her in his diary. Seiko eventually married the English teacher Alfred Charlton, lived a long life, and left a legacy intertwined with Rizal's recollections of love sacrificed for duty.
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
            <p>
              Ocampo, A. (2015, December 11).&nbsp;<i>Rizal is hardly “gasgas.”&nbsp;</i> INQUIRER.net.&nbsp;
              <a href="https://opinion.inquirer.net/91042/rizal-is-hardly-gasgas" target="_blank" rel="noopener noreferrer">
                https://opinion.inquirer.net/91042/rizal-is-hardly-gasgas
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
