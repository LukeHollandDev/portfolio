import React, { useState } from 'react';
/* Import project images */
// @ts-ignore
import algorithmAnimator from '../../assets/projects/algorithm_animator.png';
// @ts-ignore
import freezerId from '../../assets/projects/freezer_id.png';
// @ts-ignore
import helloFreshed from '../../assets/projects/hello_freshed.png';
// @ts-ignore
import marvelated from '../../assets/projects/marvelated.png';
// @ts-ignore
import obtainadex from '../../assets/projects/obtainadex.png';
// @ts-ignore
import pokemonTCGDecklist from '../../assets/projects/pokemon_tcg_decklist.png';
// @ts-ignore
import tradeUp from '../../assets/projects/trade-up.png';
// @ts-ignore
import webUtilities from '../../assets/projects/web_utilities.png';

const allProjects = [
   {
      name: 'Algorithm Animator',
      description:
         'Allows users to animate and visually walk through algorithms in order to gain a better understanding of them. This was created for my disseration in my final year of University.',
      image: algorithmAnimator,
      preference: 5,
      languages: ['React', 'JavaScript', 'Node.js', 'Cytoscape', 'Jest'],
      link: '/indproj',
   },
   {
      name: 'Freezer ID',
      description:
         'Helps keep frozen items organised by allowing users to create a digital inventory of their freezer. I created this as sometimes I would forget what was in my freezer and it would go to waste.',
      image: freezerId,
      preference: 1,
      languages: [
         'NextJS',
         'React',
         'TypeScript',
         'Node.js',
         'Docker',
         'PostgreSQL',
         'NextAuth',
         'TailwindCSS',
      ],
      link: 'https://freezer.lukeh.xyz/',
   },
   {
      name: 'HelloFreshed',
      description:
         'Provides a way to favourite and plan out Hello Fresh meals. I scraped the Hello Fresh recipes and created a way to favourite and plan them out. Allowing users to create a menu for the week.',
      image: helloFreshed,
      preference: 2,
      languages: [
         'Vue',
         'JavaScript',
         'Node.js',
         'Vite',
         'Docker',
         'PostgreSQL',
         'Python',
         'TailwindCSS',
      ],
      link: 'https://hf.lukeh.xyz/',
   },
   {
      name: 'Marvelated',
      description:
         'As a huge fan of the Marvel Cinematic Universe, I created a website that allows users to search any movie and see if any of the cast/crew in the movie has worked on a Marvel movie.',
      image: marvelated,
      preference: 7,
      languages: ['Vue', 'TypeScript', 'Node.js', 'Python', 'TMDB API'],
      link: '/marvelated',
   },
   {
      name: 'Obtainadex',
      description:
         'Keeping track of your Pokemon collection when trying to create a "form master dex" can be difficult. I created this website to keep track which Pokemon are missing. Also lets users mark Pokemon as obtained with their own Trainer ID.',
      image: obtainadex,
      preference: 4,
      languages: [
         'NextJS',
         'React',
         'TypeScript',
         'Node.js',
         'Python',
         'DaisyUI',
      ],
      link: 'https://obtainadex.lukeh.xyz/',
   },
   {
      name: 'Pokemon TCG Decklist Tool',
      description:
         'As someone who plays the Pokemon TCG, often when I go to events I need to print out my decklist. I created this tool to make it easier to create and print decklists allowin users to import their PTCGL decklist and print it out using the official Pokemon TCG decklist format.',
      image: pokemonTCGDecklist,
      preference: 6,
      languages: ['React', 'JavaScript', 'Node.js', 'Vite'],
      link: '/pokemon-decklist',
   },
   {
      name: 'Trade Up Game',
      description:
         'Simple game to trade up from £1 to a £100 by trading real eBay sold items. I created this as it was a game I thought might be fun, and it was. It has support for local and global leaderboards!',
      image: tradeUp,
      preference: 8,
      languages: ['JavaScript', 'HTML', 'Python', 'Flask'],
      link: '/trade-up',
   },
   {
      name: 'Web-Utilities',
      description:
         'Created initially out of frustration due the inconsistency of PDF mergers on the internet. I created this site to merge PDFs which was very useful to combine notes when I was at University. I also added some other tools like a Markdown viewer and word counter.',
      image: webUtilities,
      preference: 3,
      languages: ['Vue', 'JavaScript', 'Node.js', 'Vite'],
      link: '/web-utilities',
   },
];

allProjects.sort((a, b) => a.preference - b.preference);

const Projects: React.FC = () => {
   const [projects, setProjects] = useState(allProjects.slice(0, 4));

   return (
      <div className="py-2 fade-in anim-delay-2400">
         <h2 className="text-xl">Projects</h2>
         <div className="flex flex-wrap">
            {projects.map((project, index) => (
               <div key={index} className="fade-in flex p-2 sm:w-1/2 md:w-1/3">
                  <a href={project.link} target="_blank" className="z-50 flex">
                     <div className="border p-4 rounded-lg grow relative flex flex-col h-full">
                        <div className="absolute top-1 right-1 bg-white rounded-full p-1">
                           <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g id="Interface / External_Link">
                                 <path
                                    id="Vector"
                                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </g>
                           </svg>
                        </div>
                        <div
                           className="h-32 bg-cover bg-center"
                           style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <h3 className="text-lg font-bold">{project.name}</h3>
                        <p className="text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                           {project.languages.map((language, index) => (
                              <span
                                 key={index}
                                 className="text-xs bg-gray-200 dark:bg-white dark:text-black p-2 rounded-lg"
                              >
                                 {language}
                              </span>
                           ))}
                        </div>
                     </div>
                  </a>
               </div>
            ))}

            <div className="flex p-2 sm:w-1/2 md:w-1/3">
               <div className="h-full flex justify-center items-center grow">
                  <button
                     onClick={() =>
                        projects.length < allProjects.length
                           ? setProjects(allProjects)
                           : setProjects(allProjects.slice(0, 4))
                     }
                     className="font-bold py-2 px-4 border p-4 rounded-lg"
                  >
                     {projects.length < allProjects.length
                        ? 'Show All'
                        : 'Show Less'}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;
