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
          <p className="text-xl lg:text-2xl text-stone-700 dark:text-stone-200">José Rizal's dear (unhappy) wife</p>
        </div>
        <div className="rounded-lg bg-white dark:bg-black p-6 lg:p-8 shadow-lg text-rose-400 gap-4 text-sm md:text-base">
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Full Name:</span>Marie Josephine Leopoldine Bracken</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nickname:</span>Josephine</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Lifespan:</span>1876 - 1943</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Birthplace:</span>Hong Kong</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Nationality:</span>Irish</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Father:</span>James Bracken</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Mother:</span>Elizabeth Jane MacBride</p>
          <p className="text-stone-700 dark:text-stone-200"><span className="font-bold text-rose-400 pr-2">Spouse:</span>José Rizal</p>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <h3 className="text-3xl font-bold lg:text-4xl text-stone-700 dark:text-rose-400 py-4 text-left">Dulce Estranjera</h3>
          <p>
            Marie Josephine Leopoldine Bracken, born on August 9, 1876, in Victoria, Hong Kong, had a difficult early life. She was the youngest of five children of James Bracken, a British army corporal, and Elizabeth Jane MacBride. Tragically, her mother died shortly after her birth, causing her father to place her in the care of her godparents, George Taufer, an American engineer, and his Portuguese wife. Josephine also endured the loss of her foster mother at the age of seven and later clashed with Taufer's third wife, leading to periods of estrangement.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Love and Life in Dapitan</h3>
          <p>
            Josephine's life changed dramatically when she accompanied her adoptive father, George Taufer, to Dapitan in 1895 to seek treatment from José Rizal for Taufer's cataracts. At 18, the blue-hair and brown-eyed Josephine caught Rizal's attention. Despite Taufer's strong opposition to their relationship and an episode where Taufer attempted self-harm, Josephine and Rizal's bond deepened, leading her to stay with Rizal after Taufer's return to Hong Kong.
          </p>
          <p>
            Their attempts to have a Catholic marriage failed due to Rizal's refusal to retract his anti-clerical views. With Josephine's consent, they considered themselves married before God through a private ceremony. Josephine adapted to life in Dapitan, being in charge of Rizal's household and supporting his endeavors. Joe, as she would call him, praised her as “good, obedient, and submissive,” and she earned the affection of his family, despite initial suspicions of her being a spy for Spanish authorities.
          </p>
          <p>
            The couple experienced heartbreak in late 1895 when their prematurely born son, possibly named Francisco or Peter, died shortly after birth. Rizal memorialized the child with a pencil sketch and buried him in a secluded area of Talisay. Speculations about the circumstances leading to the premature birth include tales of a prank or a possible lover's quarrel, though these remain unverified.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Rizal's Final Moments</h3>
          <p>
            As Rizal's political exile neared its end, he received permission in 1896 to serve as a volunteer physician in Cuba. On July 31, Josephine accompanied him on the steamer España, departing Dapitan for Manila. Their departure marked the beginning of the end of Rizal's life and Josephine's final role in his legacy.
          </p>
          <p>
            In Rizal's final moments, Josephine's grief was her love persevering. On December 30, 1896, she bid him farewell at Fort Santiago, where he entrusted her with a copy of The Imitation of Christ, inscribed tenderly to his “dear and unhappy wife.” Though unverified claims suggest a secret marriage officiated by Father Vicente Balanguer, the Rizal family doubted this, leaving her marital status questionable.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Life After Rizal</h3>
          <p>
            Following Rizal's execution, Josephine joined the Katipunan. Gen. Emilio Aguinaldo hesitantly allowed her to join the revolutionary forces where she learned shooting and horseback riding. Moreover, she suggested building a field hospital in the casa hacienda of Tejeros as she was also in charge of caring for the wounded. She later endured exile, relocating to Hong Kong in 1897.
          </p>
          <p>
            In Hong Kong, she remarried Vicente Abad on December 15, 1898, a Cebuano businessman, and bore a daughter, Dolores, in April 17, 1900. Despite finding a semblance of stability, her health rapidly declined due to tuberculosis. Josephine passed away on March 15, 1902, in the land of her birth. Her burial in Hong Kong remains a subject of debate, with conflicting accounts of her final resting place.
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
              Bantug, A. L. R., & Ventura, S. M. (1997). <i>Indio Bravo: The story of Jose Rizal.</i> Makati City, Philippines: Tahanan Books.
            </p>
            <p>
              Manebog, J. (2013). Colorful love affairs of Dr. Jose Rizal.
              <a href="https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal" target="_blank" rel="noopener noreferrer">
                https://www.everand.com/read/200206244/The-Colorful-Love-Affairs-of-Dr-Jose-Rizal
              </a>
            </p>
            <p>
              Ocampo, A. R. (2015, August 28). Josephine Bracken, revolutionary. <i>INQUIRER.net.</i>
              <a href="https://opinion.inquirer.net/87988/josephine-bracken-revolutionary" target="_blank" rel="noopener noreferrer">
                https://opinion.inquirer.net/87988/josephine-bracken-revolutionary
              </a>
            </p>
            <p>
              Ocampo, A. R. (2016, February 12). Rizal in love. <i>INQUIRER.net.</i>
              <a href="https://opinion.inquirer.net/92807/rizal-in-love" target="_blank" rel="noopener noreferrer">
                https://opinion.inquirer.net/92807/rizal-in-love
              </a>
            </p>
            <p>
              Zaide, G. F., & Zaide, S. M. (1984). <i>Jose Rizal: Life, works, and writings of a genius, writer, scientist, and national hero.</i> Philippines: National Bookstore, Inc.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
