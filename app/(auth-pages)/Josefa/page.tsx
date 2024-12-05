"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Josefa() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://ourhappyschool.com/sites/default/files/josefa.jpg')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Josefa Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Josefa Rizal, also known as "Panggoy," was the ninth child of Don Francisco and Doña Teodora. Though she remained unmarried, Josefa's life was characterized by active participation in the revolutionary movement after José Rizal's martyrdom. Among the most interesting anecdotes of her relationship with her brother José was a letter he wrote to her on October 26, 1893, where he addressed her as “Miss Josephine Rizal,” making a subtle reference to his wife, Josephine Bracken. In the letter, José praised Josefa for her near mastery of the English language. The letter also mentioned a sum of money José had sent, including 10 pesos for a lottery ticket, exposing his gambling as a vice.
          </p>
          <p>
            After José's execution, Josefa suffered from epilepsy but still became involved in the Katipunan. She was one of the original 29 women admitted to the Katipunan, alongside prominent figures like Gregoria de Jesus, Andres Bonifacio's wife. Josefa safeguarded the secret documents of the society, and during meetings, she participated in singing and dancing to disguise the revolutionary discussions and avoid suspicion from the Spanish authorities. Her contributions to the revolution certifies commitment to the Filipino cause.
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
