"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Trinidad() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://kahimyang.com/resources-14/trinidad-rizal.webp')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Trinidad Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Trinidad “Trining” Rizal was the tenth child in the Rizal family. In March 1886, José wrote to Trinidad, convincing her to study and emphasizing the importance of reading attentively. Even though she was struggling with academics, Trinidad surprised José in 1890 by informing him that she had left college after two years. These letters reflect the supportive relationship between the two siblings, as José encouraged his younger sister in her educational journey.
          </p>
          <p>
            Trinidad was loyal to her family, and of course to José. In 1893, she joined her mother in Dapitan, where they lived with José during his exile. Although Trinidad once planned José’s escape, she stayed in Dapitan, where she expressed her concern about her prospects for marriage in the isolated town. She ended up not marrying and living with her sister Josefa until their deaths. In José’s final days, Trinidad was present with their mother at his prison cell in Fort Santiago. As José was about to be executed, he entrusted Trinidad with the manuscript of his last poem, Mi Último Adiós, hidden in an alcohol stove. After his death, she joined the Katipunan, raising her role in the fight for Philippine independence. Trinidad's later years were remarked with resilience, as she was the last surviving member of the Rizal family, living for many years after her siblings.
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
