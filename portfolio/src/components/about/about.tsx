import React from 'react';

const About: React.FC = () => {
   return (
      <div className="py-2 text-justify">
         <p className="fade-in">
            Hi! My name is Luke, I'm a <b>software engineer</b> working at{' '}
            <a
               href="https://www.barclays.co.uk/"
               target="_blank"
               className="text-blue-600 visited:text-purple-600"
            >
               Barclays
            </a>
            .
         </p>

         <p className="fade-in anim-delay-400">
            I'm passionate about creating software that <b>solves</b> real-world
            problems and <b>helps</b> people.
         </p>

         <p className="fade-in anim-delay-800">
            In my free time, I <b>develop</b> and <b>deploy</b> various
            applications to help me in my day-to-day life and some just for{' '}
            <b>fun</b>.
         </p>

         <p className="fade-in anim-delay-1200">
            I also enjoy keeping up to date with the <b>latest technologies</b>{' '}
            and trends in the software industry.
         </p>

         <p className="fade-in anim-delay-1600">
            I'm always looking for new opportunities to <b>learn</b> and{' '}
            <b>grow</b> as a software engineer.
         </p>
      </div>
   );
};

export default About;
