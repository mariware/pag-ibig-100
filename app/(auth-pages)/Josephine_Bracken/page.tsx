"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function JosephineBracken() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Josephine_Bracken_BR.jpg/800px-Josephine_Bracken_BR.jpg')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Josephine Bracken
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl my-8 m-auto flex flex-col p-3 px-5 gap-4 text-base">
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400">
          <h3 className="text-lg font-bold">
            <LoveIcon className="text-2xl pb-1" /> About Josephine
          </h3>
          <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">José Rizal's (unhappy) wife</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Segunda Solis Katigbak</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>O-Sei-san</p>
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
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4">Love at First Sight</h3>
          <p>
            Segunda Katigbak occupies a unique place in José Rizal's life as his first romantic infatuation, often described as "puppy love" and marked by "love at first sight." Rizal, then a 16-year-old student, met Segunda in 1887 during a visit to his grandmother in Manila. Segunda, two years younger and a student at La Concordia College, was admired by Rizal for her physical charm, which he vividly recorded in his diary. Their meetings grew more frequent as Rizal visited his sister Olympia at the same school, motivated largely by his budding affection for Segunda. The intensity of their connection was symbolized by an exchange of gifts—an artificial rose crafted by Segunda and a pencil sketch of her drawn by Rizal.
          </p>
          <p>
            Despite their growing intimacy, their romance was destined to be unfulfilled. Segunda was already engaged to Manuel Luz, a fellow townsman, a fact that Rizal learned later. This revelation, combined with Rizal's sense of delicadeza (honor), prevented him from pursuing her further. Their relationship ended poignantly when Rizal, though initially eager to meet her again, chose not to follow her carriage as she departed Biñan. This decisive moment marked the conclusion of their brief but heartfelt love story, leaving a lasting impression on Rizal's early emotional life.
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
