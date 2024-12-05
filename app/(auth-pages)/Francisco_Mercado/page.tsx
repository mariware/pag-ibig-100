"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function FranciscoMercado() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="bg-[url('https://kahimyang.com/resources-14/francisco_mercado.jpg')] bg-cover bg-top bg-fixed text-white dark:text-black h-48 lg:h-96 w-full flex flex-col lg:flex-row">
        <div className="w-full h-48 lg:h-96 bg-black dark:bg-rose-300 opacity-50 absolute" />
        <div className="max-w-5xl lg:w-full h-full flex m-auto p-3 px-5 lg:items-end items-center lg:gap-4 z-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left lg:mb-8">
            Francisco Mercado
          </h1>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <p>
            Don Francisco Mercado Rizal, the father of José Rizal, influenced his intellectual and moral foundation. Born in Biñan, Laguna, on May 11, 1818, Francisco was strongly committed to education and family. He was also of Chinese descent, tracing his ancestry to Domingo Lam-co, a learned Chinese immigrant. Francisco's heritage and his upbringing in a family that valued education laid the groundwork for his own intellectual pursuits and, later, his guidance of José's education. He became the lieutenant governor of Calamba, known as “Tiniente Kiko.”
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Don Francisco's Role in José's Education and Early Life</h3>
          <p>
            Don Francisco focused on early efforts to teach José. From a young age, José was exposed to various tutors and schooling, some of which were personally chosen by his father. At the age of seven, José was taught by Don Leon Monroy, a close friend of Don Francisco, basic Latin and Spanish. Don Francisco later arranged for José to continue his education in Biñan.
          </p>
          <p>
            Although José was a prodigy, Don Francisco ensured that he did not become complacent. When José returned home from Biñan, claiming that he had already learned everything, Don Francisco insisted that he continue his education, showing the father's determination to discipline him. José acknowledged his father's wisdom and it instilled in him a sense of responsibility to use his knowledge for the greater good of the country.
          </p>
          <p>
            Don Francisco also supported José's later academic endeavors, including his enrollment at the Ateneo Municipal in Manila. When José expressed interest in reading novels, his father purchased him an expensive set of the Universal History by César Cantu. Despite the difficulties and financial constraints, Don Francisco fulfilled his duty towards his son's educational growth.
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Rizal's Love for His Father</h3>
          <p>
            José Rizal's love and respect for his father, Don Francisco, was evident but not always emphasized throughout his life. From a young age, José deeply admired his father, and their bond was strengthened by the father's guidance, discipline, and sacrifices. José expressed his affection for Don Francisco through various artistic works, such as a clay bust he carved of his father in 1881 and a life-sized wood sculpture in 1887.
          </p>
          <p>
            Rizal's respect for his father continued into adulthood. José even named his child after his father. Unfortunately, the baby died a few hours after being born. Additionally, in the final moments of his life, José wrote a deeply emotional letter to his brother Paciano, expressing his regret for any pain he may have caused his father. In a separate letter addressed directly to Don Francisco, José wrote,
          </p>
          <p className="px-8">
            "My beloved Father, pardon me for the pain with which I repay you for sorrows and sacrifices for my education. I did not want nor did I prefer it. Goodbye, Father, goodbye…"
          </p>
          <h3 className="text-xl font-bold lg:text-2xl text-stone-700 dark:text-rose-400 py-4 text-left">Don Francisco's Influence on José's Legacy</h3>
          <p>
            Don Francisco's influence on José did not end with his death in 1898. Even in exile, José honored his father's memory and teachings. Don Francisco advised José against returning to the Philippines after the Cavite mutiny and the martyrdom of Gomburza. He was aware of the dangers José faced as an intellectual and nationalist. Nevertheless, José continued to write and fight for reform through his novels, Noli Me Tangere and El Filibusterismo.
          </p>
          <p>
            The impact of José's father was integral to his sense of duty and responsibility as a national hero. His father's model of a principled life, committed to the welfare of his family, was central to José's own philosophy of reform and nation-building. Don Francisco's nurturing, both in terms of intellectual and moral upbringing, guided José to be the man who would challenge colonialism and inspire a nation to fight for its independence.
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
          </div>
        </div>
      )}
    </div>
  );
}
