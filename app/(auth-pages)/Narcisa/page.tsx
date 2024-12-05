"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Narcisa() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://www.knightsofrizal.be/images/family/03-narcisa.jpg')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Narcisa Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Narcisa Rizal, nicknamed “Sisa,” was the third child of Don Francisco and Doña Teodora. Like her sister Saturnina, Narcisa contributed to José's education in Europe by pawning her jewelry and selling her clothes. She demonstrated devotion to her brother by memorizing many of his poems and extending her hospitality to those close to him. Narcisa provided refuge to Josephine Bracken when the family had suspicions about her being a spy, earning José's gratitude, expressed in a letter during his detention aboard the <i>Castilla</i>.
          </p>
          <p>
            Narcisa's role was beyond familial support to José's legacy. She searched for his unmarked grave at Paco Cemetery after his execution and identified it through freshly turned soil. She bribed the caretaker to mark the site with “RPJ,” Rizal's initials in reverse. Years later, she, along with her siblings, exhumed José's remains to honor his memory properly. Her commitment to family also brought challenges, as her husband, Antonino Lopez, faced Spanish persecution for sheltering Rizal's exiled parents. Narcisa's sacrifices, including enduring the dismantling of her home, show her selflessness and dedication to her family.
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
