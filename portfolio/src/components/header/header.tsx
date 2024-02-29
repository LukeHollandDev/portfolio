import React from 'react';
import Typewriter from '../typewriter/typewriter';

type HeaderProps = {
   name: string;
   descriptors: string[];
};

const Header: React.FC<HeaderProps> = ({ name, descriptors }) => {
   return (
      <header className="py-4">
         <h1 className="text-2xl font-bold">{name}</h1>
         <Typewriter words={descriptors} />
      </header>
   );
};

export default Header;
