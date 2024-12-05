"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function Paciano() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://images.findagrave.com/photos/2022/56/94596162_1c9b975d-c965-41b4-9252-c6f3f6ec3bb5.jpeg?size=photos250')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Paciano Rizal
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Paciano Rizal is José's elder brother and only brother. Paciano not only acted as his sibling but also as a mentor and a second father. He introduced José to Justiniano Aquino Cruz, his former teacher in Biñan, to help in his early education. Later, Paciano accompanied José to Manila for his entrance exams and enrollment at the Ateneo Municipal. He even arranged for his boarding house in Intramuros.
          </p>
          <p>
            Paciano was also the one who advised José to use the surname “Rizal” instead of “Mercado” to protect him from state surveillance. It was also because Paciano had a controversial connection with Father Burgos, one of the martyred Gomburza priests. He discouraged José from pursuing law but instead supported his decision to study medicine to treat their mother's failing eyesight. Paciano guardedly guided his brother and supported his aspirations, even if they risked political attention.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Paciano's Sacrifices for José</h3>
          <p>
            As José prepared to leave for Europe to further his studies and political mission, Paciano gave José 365 pesos for his trip and informed their parents about José's departure. Over the next five years, Paciano provided financial support to his brother so José could focus on his studies abroad. Through constant correspondence, Paciano offered advice, dissuading José from returning prematurely to the Philippines due to the dangerous political situation.
          </p>
          <p>
            Paciano's sacrifices extended to enduring personal suffering for his brother's cause. When José was imprisoned in Fort Santiago, Paciano was arrested and subjected to severe torture to extract information about José's involvement in revolutionary activities. Despite the inhumane treatment, Paciano refused to testify against his brother. This act of loyalty and courage is proof of his filial piety to José and their shared ideals.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Rizal's Love for His Brother</h3>
          <p>
            José Rizal's letters contain his love and gratitude toward Paciano. José wrote to Paciano before his execution, expressing guilt for leaving him to bear the family's burdens. He stated,
          </p>
          <blockquote className="italic px-8 text-stone-700 dark:text-stone-300">
            “I think of the hardships you went through to help me in my career, and I believe I tried my best to waste no time. My brother, if the fruit is bitter, the fault is not mine, but fate's…”
          </blockquote>
          <p>
            Throughout José's life, Paciano was a constant figure of support, standing by him during his struggles and triumphs. Even when José returned home in 1887, Paciano accompanied him on various vacations, including a climb up Mount Makiling. José's affection for his brother was not only familial but also rooted in respect for Paciano's guidance and sacrifices.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Paciano's Legacy</h3>
          <p>
            After José's execution in 1896, Paciano continued the fight for Philippine independence, joining the revolutionary forces under Emilio Aguinaldo and later serving as a general and commander in Laguna. He had ingenuity in military strategy, such as using firecrackers to deceive Spanish forces. Paciano's involvement in the Philippine-American War completed his legacy as a patriot who, like his brother, pursued the dream of freedom for his country.
          </p>
          <p>
            Paciano Rizal's role in José's life and the Philippine Revolution exemplifies filial piety and patriotism. Paciano's legacy, though often overshadowed by José's, is equally important to the story of the Rizal family and the nation's fight for independence.
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
              Ocampo, A. (2012). <em>Rizal Without the Overcoat</em>. Mandaluyong City, Philippines, Anvil Publishing Inc.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
