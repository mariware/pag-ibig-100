"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Soledad() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://kahimyang.com/resources-23/solidad-rizal.avif')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Soledad Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Soledad "Choleng" Rizal, the youngest sibling of José Rizal, was the receiver of both praise and reprimand in his letters. In a letter dated June 6, 1890, José expressed pride and joy in Choleng’s decision to become a teacher but also took the opportunity to advise her on matters of virtue and familial honor. He emphasized that a teacher should embody the highest moral qualities.
          </p>
          <blockquote className="italic px-8 text-stone-700 dark:text-stone-300">
            “If you have a sweetheart, behave towards him nobly and with dignity, instead of resorting to secret meetings and conversations which do nothing but lower a woman's worth in the  eyes of a man… You should value more, esteem more your honor and you will be  more esteemed and valued.”
          </blockquote>
          <p>
            His concern for her was rooted in a deep sense of family duty. He was also frustrated when Choleng married Pantaleon Quintero without their parents' consent which “disturbed the peace of our family.” José's obedience to parents was obvious in his personal sacrifices, as he willingly gave up his own romantic pursuits to respect his father’s wishes. He told Choleng, "Our father's opposition was enough for me to give up all my plans," illustrating his commitment to honoring his parents’ authority. This contrast between Choleng and José displays the difference between the siblings. José was insistent on the importance of setting a good example for the next generation. He felt that he had a responsibility as an older brother in guiding his siblings and protecting the family's reputation.
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
