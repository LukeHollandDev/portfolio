import React, { useState, useEffect } from 'react';

export interface TypewriterProps {
   words: string[];
}

const getSubString = (word: string, index: number) => word.substring(0, index);

const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
   const [currentStringIndex, setCurrentStringIndex] = useState(0);
   const [currentWordIndex, setCurrentWordIndex] = useState(0);

   useEffect(() => {
      setTimeout(() => {
         if (currentWordIndex < words[currentStringIndex].length) {
            setCurrentWordIndex(currentWordIndex + 1);
         } else {
            if (currentStringIndex < words.length - 1) {
               setTimeout(() => {
                  setCurrentStringIndex(currentStringIndex + 1);
                  setCurrentWordIndex(0);
               }, 500);
            }
         }
      }, 100);
   });

   return (
      <span>
         {getSubString(words[currentStringIndex], currentWordIndex)}
         {words[currentStringIndex].length ===
         getSubString(words[currentStringIndex], currentWordIndex).length
            ? ''
            : '|'}
      </span>
   );
};

export default Typewriter;
