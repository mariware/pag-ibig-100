"use client"

import LoveIcon from '@mui/icons-material/FavoriteRounded';
import { useState } from 'react';

export default function about() {

  const [showReferences, setShowReferences] = useState(false);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

  return (
    <div className="w-full justify-center bg-rose-400">
      <div className="w-full bg-white dark:bg-black">
        <div className="w-full max-w-5xl py-8 lg:py-16 m-auto flex flex-col p-3 px-10 lg:px-5 gap-2 text-base text-justify">
          <h1 className="text-rose-400 font-bold text-5xl md:text-6xl lg:text-7xl lg:leading-[0.9] text-center lg:text-left mb-8">
            On Rizal, romance, and realizations
          </h1>
          <p>
            As a national hero, José Rizal is often celebrated for his patriotism, yet our country isn’t the only thing Rizal loved. Beyond his devotion to the nation, Rizal experienced the complexities of personal relationships, including his often-romanticized reputation as a casanova and his profound love for his family. The objective of this website is to explore the themes of love in the life of Rizal, through his romantic engagements and his filial piety.
          </p>
          <p>
            Rizal's romantic relationships have been a subject of both interest and intrigue. He is known to have had multiple girlfriends — perhaps more than historical records suggest. While this does not diminish from his character, it is interesting to note this aspect of his life because it humanizes him. Rizal, a person of monumental ideals, also has personal struggles. Despite his remarkable contributions to the country’s independence, Rizal faced challenges in courtship and dating. A recurring theme in his love life was his inability to commit fully, as he prioritized his aspirations above his affairs. Even his family expressed concerns, doubting the loyalty of his eventual wife. Nonetheless, Rizal’s resilience in matters of the heart reflected his persistence in the cause of national liberation. There are some ambiguities in the accounts of his love stories but enough evidence to prove that he knew what he wanted to achieve in life.
          </p>
          <p>
            Rizal’s love for his family was equally sincere. His filial love sometimes dictated his decisions, such as ending a relationship at his father’s request. (You may want to read the site to know which of his siblings refused to do the same.) He prioritized his education and literary work over romantic interests, understanding the importance of these for his greater life purpose. Even while living in Europe, Rizal maintained a close bond with his family through correspondence. Perhaps his most touching act of devotion was studying medicine in Europe to treat his mother’s cataracts. His family, in turn, supported his endeavors, sharing his struggles and the inherent risks of his revolutionary activities. They shared patriotism with a bond that endured even after his execution.
          </p>
          <p>
            The average Filipino may recognize Rizal’s love for his country, but this love was not something he realized suddenly. From a young age, Rizal witnessed the oppression of the Filipino people including his direct family. Despite being born into privilege, he was deeply moved by the injustices around him. Learning from the struggles of other nations, Rizal understood that achieving greatness required sacrifice, including his personal happiness. This is not meant to glorify Rizal but rather to realize his deliberate choice of selflessness over personal contentment.
          </p>
          <p>
            Rizal’s love goes beyond his relationships with women. The women in his life were not merely “girlfriends” but individuals who inspired his journey. Likewise, his love for his family and country was far greater than his personal gratifications. This website invites readers to view Rizal’s life through a different lens and realize that his most noble sacrifices are born out of love.
          </p>
        </div>
      </div>
    </div>
  );
}
