"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function GertrudeBeckett() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://philnews.ph/wp-content/uploads/2019/09/Gertrude-Beckett.jpg')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Gertrude Beckett
          </h1>
        </div>
      </div>
      <div className="w-full max-w-5xl my-8 m-auto flex flex-col p-3 px-5 gap-4 text-base">
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400">
          <h3 className="text-lg font-bold">
            <LoveIcon className="text-2xl pb-1" /> About Gertrude 
          </h3>
          <div className="w-full p-[1px] bg-gradient-to-r from-rose-200 dark:from-rose-400 to-transparent my-2 lg:my-4" />
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">Pettie's Gettie</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Gertrude Beckett</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>Tottie</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Birthplace:</span>United Kingdom</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nationality:</span>British</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Father:</span>Charles Beckett</p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-4 text-base text-justify">
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4 text-left">Friendzone</h3>
          <p>
            During his stay in London from May 1888 to March 1889, José Rizal formed a close friendship with Gertrude Beckett, the daughter of his landlord, Charles Beckett. Gertrude was an attractive woman who had affectionate feelings for Rizal. She assisted him in his artistic endeavors, including painting and sculpting, and her support allowed him to complete significant works like Prometheus Bound and The Triumph of Science over Death. Rizal, in turn, enjoyed her company. He called her “Gettie” while she called him “Pettie.”
          </p>
          <p>
            Rizal refrained from pursuing a romantic relationship, possibly out of respect for his personal principles. Some suggest their relationship was unreciprocated on Rizal’s part. To avoid further complications and to help Gertrude move on, Rizal left London in 1889, leaving behind a sculptural memento of the Beckett sisters as a gesture of friendship and gratitude.
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
