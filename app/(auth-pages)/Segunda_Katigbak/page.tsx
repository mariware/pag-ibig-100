"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function SegundaKatigbak() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://herencialipena.com/wp-content/uploads/2022/01/segunda-katigbak-1-e1642307375285.jpg')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Segunda Katigbak
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl my-8 m-auto flex flex-col p-3 px-5 gap-4 text-base">
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400">
          <h3 className="text-lg font-bold">
            <LoveIcon className="text-2xl pb-1" /> About Segunda
          </h3>
          <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">Pepe's puppy love, his love at first sight</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Segunda Solis Katigbak</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>Unday</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Lifespan:</span>1863 - 1943</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Birthplace:</span>Lipa, Batangas</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nationality:</span>Filipino</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Father:</span>Don Norberto Calao Catigbac</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Mother:</span>Justa Luz Solis</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Spouse:</span>Don Manuel Luz</p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-4 text-base text-justify">
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4">First Crush</h3>
          <p>
            Segunda Katigbak has a unique place in José Rizal's love life as his first romantic infatuation or “puppy love.” The 16-year-old student Rizal fell in “love at first sight” when he met Segunda in 1887 during a visit to his grandmother in Manila. Segunda, two years younger and a student at La Concordia College, was admired by Rizal for her physical charm, which he recorded in his diary “Memoirs of a Student in Manila.” Rizal described her as having “eloquent eyes, rosy cheeks, and a smile that reveals  very beautiful teeth.”
          </p>
          <p>
            Their meetings became more frequent as Rizal visited his sister Olympia at the same school, more motivated by his affection for Segunda than his sister. There is even an anecdote about the two exchanging gifts, with Segunda giving him an artificial white rose she crafted and Rizal giving a pencil sketch of her that he drew in exchange.
          </p>
          <p>
            Despite their growing intimacy, their romance was destined to be unfulfilled as Segunda was already engaged to Manuel Luz. This, combined with Rizal's sense of <i>delicadeza</i> or honor, prevented him from pursuing her further. Their relationship ended when Rizal, though initially eager to meet her again, chose not to follow her carriage as she departed Biñan. This decisive moment marked the end of their heartfelt love story.
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
              Katigbak, R. (2022, November 12). Segunda Solis Katigbak: The charming lipeña who captivated Rizal's young heart.&nbsp; 
              <i>Herencia Lipeña.&nbsp;</i>
              <a href="https://herencialipena.com/2022/01/16/segunda-solis-katigbak/" target="_blank" rel="noopener noreferrer">
                https://herencialipena.com/2022/01/16/segunda-solis-katigbak/
              </a>
            </p>
            <p>
              Manebog, J. (2013). Colorful love affairs of Dr. Jose Rizal.&nbsp;
              <a href="https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal" target="_blank" rel="noopener noreferrer">
                https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal
              </a>
            </p>
            <p>
              Segunda Solis Katigbak. (2024, July 19).&nbsp;
              <i>Geni.&nbsp;</i>
              <a href="https://www.geni.com/people/Segunda-Katigbak/6000000002593265961" target="_blank" rel="noopener noreferrer">
                https://www.geni.com/people/Segunda-Katigbak/6000000002593265961
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
