import React from 'react';

const ThankYou: React.FC = () => {
   return (
      <div className="fade-in anim-delay-2400 py-2">
         <div className="max-w-3xl mx-auto px-4">
            <p className="text-center text-lg">
               Thank you for visiting my portfolio. If you have any questions or
               would like to get in touch, feel free to contact me.
            </p>
            <p className="text-center text-gray-600 dark:text-white">
               You can reach me at{' '}
               <a
                  href="mailto:lukeholland15500@gmail.com"
                  target="_blank"
                  className="underline decoration-solid"
               >
                  lukeholland15500@gmail.com
               </a>{' '}
               or connect with me on any of the platforms listed at the top of
               the site!
            </p>
         </div>
      </div>
   );
};

export default ThankYou;
