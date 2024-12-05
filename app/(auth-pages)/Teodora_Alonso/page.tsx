"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function TeodoraAlonso() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/Theodora_alonzo_quintos.jpg')] bg-cover bg-center bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Teodora Alonso Realonda
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Doña Teodora Alonso Quintos Realonda, also known as “Lolay,” was José Rizal's mother and first teacher. She was an educated woman who studied in Colegio de Santa Rosa. Like her husband, she instilled in her son a love for learning, the arts, and moral discipline. Rizal credited her early lessons, including teaching him the alphabet and Catholic prayers at three, as the foundation of his intellectual development. Her storytelling, particularly with the tale of the moth, influenced Rizal, especially in the value of sacrifice for noble ideals — a theme that later defined his life and writings.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Doña Lolay's Suffering and Sacrifice</h3>
          <p>
            Doña Teodora endured suffering for her family and principles. These injustices left an indelible mark on Rizal which solidified his resolve to fight for justice and equality. She was unjustly imprisoned twice, first under fabricated charges of conspiracy to poison her brother's wife and second for not using her legal surname, Realonda. During both imprisonments, Teodora was subjected to extremely long walks: a 50-kilometer journey from Biñan to Santa Cruz in her first arrest and an 85-kilometer march from Manila to Santa Cruz during her second. These were exceedingly difficult especially for an aging and partially blind woman. However, she remained resilient and maintained her dignity.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Against Rizal's Activism</h3>
          <p>
            While supportive of her children's education, Doña Teodora was opposed to sending Rizal to study in Manila lest it would expose him to dangers under colonial rule. Her concerns proved prophetic as Rizal's intellectual pursuits and political activism brought scrutiny from Spanish authorities. Nonetheless, she supported his decisions, even joining him in Dapitan during his exile to offer comfort and company. This showed her unconditional love and willingness to stand by her son, in spite of the most challenging circumstances.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Rizal's Love for His Mother</h3>
          <p>
            Rizal's love for Doña Teodora was reflected in his actions and writings. He dedicated his first poem, <i>Mi Primera Inspiración</i>, to her on her birthday. He pursued medicine, specifically ophthalmology, to treat her failing eyesight. Despite his achievements abroad, Rizal prioritized returning to the Philippines in 1887 to perform cataract surgery on his mother. During her imprisonment, he visited her to share his academic successes and provide emotional support.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Doña Lolay and Rizal's Final Moments</h3>
          <p>
            In Rizal's final hours, Doña Teodora pleaded for her son's life before the governor general. Though denied the opportunity to embrace her son one last time, their mutual love was evident when Rizal kissed her hand in farewell. Her respectability rose even after his execution. She refused a government pension offered in recognition of her family's sacrifices because she believed that patriotism should not be monetized. She died on August 16, 1911.
          </p>
          <p>
            Doña Teodora Alonso's support, strength, and sacrifices shaped José Rizal's character and values. Her life, marked by resilience and respect, is a powerful symbol of maternal love and of the injustices endured by Filipinos under colonial rule. As Rizal witnessed her wrongful imprisonment, he used it as a catalyst for his moral convictions and clamor on societal reform.
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
              Bantug, A. L. R., & Ventura, S. M. (1997). <em>Indio Bravo, The Story of Jose Rizal</em>. Makati City, Philippines: Tahanan Books.
            </p>
            <p>
              Manebog, J. (2013). Interesting tales of the Jose Rizal family.&nbsp;
              <a href="https://www.everand.com/read/196726099/The-Interesting-Tales-of-the-Jose-Rizal-Family" target="_blank" rel="noopener noreferrer">
                https://www.everand.com/read/196726099/The-Interesting-Tales-of-the-Jose-Rizal-Family
              </a>
            </p>
            <p>
              Rizal, Jose. (1918). <em>Rizal's Own Story of His Life</em>. Edited by Austin Craig. Manila: The Project Gutenberg.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
