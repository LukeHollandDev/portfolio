import React from 'react';
import Typewriter from '../typewriter/typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faGithub,
   faLinkedin,
   faYoutube,
   faDiscord,
   faLetterboxd,
} from '@fortawesome/free-brands-svg-icons';

type HeaderProps = {
   name: string;
   descriptors: string[];
   socials: [name: string, icon: string, link: string];
};

const Header: React.FC<HeaderProps> = ({ name, descriptors }) => {
   return (
      <header className="py-4 flex flex-wrap gap-4 justify-between items-center">
         <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <Typewriter words={descriptors} />
         </div>
         <div className="flex items-center space-x-2">
            <a
               href="https://discordapp.com/users/215227555035349004"
               title="Discord"
               target="_blank"
            >
               <FontAwesomeIcon icon={faDiscord} size="2xl" />
            </a>
            <a
               href="https://github.com/AmazonPriime"
               title="GitHub"
               target="_blank"
            >
               <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
            <a
               href="https://www.linkedin.com/in/luke-holland-/"
               title="LinkedIn"
               target="_blank"
            >
               <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
            <a
               href="https://www.youtube.com/channel/UCUB0dOhhB1dqw83OfEHX8ig"
               title="YouTube"
               target="_blank"
            >
               <FontAwesomeIcon icon={faYoutube} size="2xl" />
            </a>
            <a
               href="https://letterboxd.com/realluke/"
               title="Letterboxd"
               target="_blank"
            >
               <FontAwesomeIcon icon={faLetterboxd} size="2xl" />
            </a>
         </div>
      </header>
   );
};

export default Header;
