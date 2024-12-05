"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function SuzanneJacoby() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://talambuhay.net/wp-content/uploads/2023/10/image-5.png')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Suzanne Jacoby
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl my-8 m-auto flex flex-col p-3 px-5 gap-4 text-base">
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400">
          <h3 className="text-lg font-bold">
            <LoveIcon className="text-2xl pb-1" /> About Suzanne
          </h3>
          <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">professional yearner</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Susanna Thill</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>Petite</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Lifespan:</span>1872 - 1951</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Birthplace:</span>Belgium</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nationality:</span>Belgian</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Father:</span>Peter Thill</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Mother:</span>Clara Jacoby</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Spouse:</span>Victor Wolff</p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-4 text-base text-justify">
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4 text-left">Keeping Tabs</h3>
          <p>
            During his stay in Brussels in 1890, José Rizal encountered Suzanne Jacoby, a petite Belgian lady who fell in love with him. Living in a boarding house managed by Suzanne's aunts, Rizal spent six months on his literary work, particularly El Filibusterismo. Despite his preoccupations, Rizal and Suzanne shared a mutual understanding, with Suzanne even calling him a “little bad boy.” Their interactions were warm yet casual. Rizal did not appear deeply invested emotionally compared to her.
          </p>
          <p>
            Suzanne was deeply affected when Rizal left Brussels, expressing her yearning through her long love letters. In these, she reminisced about their time together and wished for his return. Despite Suzanne’s persistent feelings, Rizal returned in 1891 solely to finalize El Filibusterismo, maintaining his focus on his patriotic plans rather than personal attachments. Their connection, while tender for Suzanne, remained transient as Rizal departed for good, leaving behind a heartbroken girl.
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
              Lucero, T. S. (2022, July 19).&nbsp;<i>Correcting history: Rizal was not into cougars.&nbsp;</i>Philstar.com.&nbsp;
              <a href="https://www.philstar.com/the-freeman/opinion/2022/07/20/2196619/correcting-history-rizal-was-not-cougars" target="_blank" rel="noopener noreferrer">
                https://www.philstar.com/the-freeman/opinion/2022/07/20/2196619/correcting-history-rizal-was-not-cougars
              </a>
            </p>
            <p>
              Manebog, J. (2013). Colorful love affairs of Dr. Jose Rizal.&nbsp;
              <a href="https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal" target="_blank" rel="noopener noreferrer">
                https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal
              </a>
            </p>
            <p>
              Sarmiento, A. (2023, September 21).&nbsp;<i>Suzanne Jacoby.&nbsp;</i>Geni.&nbsp;
              <a href="https://www.geni.com/people/Suzanne-Jacoby/6000000198416489823" target="_blank" rel="noopener noreferrer">
                https://www.geni.com/people/Suzanne-Jacoby/6000000198416489823
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
