import React from 'react';
// @ts-ignore
import typeScriptImage from '../../assets/technologies/typescript.png';
// @ts-ignore
import pythonImage from '../../assets/technologies/python.svg';
// @ts-ignore
import javaImage from '../../assets/technologies/java.png';
// @ts-ignore
import dockerImage from '../../assets/technologies/docker.png';
// @ts-ignore
import reactImage from '../../assets/technologies/react.svg';
// @ts-ignore
import fastAPIImage from '../../assets/technologies/fastapi.png';
// @ts-ignore
import springBootImage from '../../assets/technologies/springboot.svg';
// @ts-ignore
import tailwindImage from '../../assets/technologies/tailwind.svg';

const technologies = [
   { name: 'TypeScript', image: typeScriptImage },
   { name: 'Python', image: pythonImage },
   { name: 'Java', image: javaImage },
   { name: 'Docker', image: dockerImage },
   { name: 'React', image: reactImage },
   { name: 'FastAPI', image: fastAPIImage },
   { name: 'Spring Boot', image: springBootImage },
   { name: 'TailwindCSS', image: tailwindImage },
   // add more technolgoies here as I think of them
];

const Technologies: React.FC = () => {
   return (
      <div className="fade-in anim-delay-2000">
         <h2 className="text-xl">Technologies</h2>
         <p>Below is a list of technologies I have extensive experience:</p>
         <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((technology, index) => (
               <div key={index} className="gap-1 text-center">
                  <img
                     src={technology.image}
                     alt={technology.name}
                     className="h-24 aspect-w-16 aspect-h-9  p-2"
                  />
                  {technology.name}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Technologies;
