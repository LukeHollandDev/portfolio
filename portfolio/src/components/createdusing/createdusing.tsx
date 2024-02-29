import React from 'react';

interface CreatedUsingProps {
   languages: string[];
}

const CreatedUsing: React.FC<CreatedUsingProps> = ({
   languages,
}: CreatedUsingProps) => {
   return (
      <div className="fade-in anim-delay-2800 flex justify-center gap-2">
         <p className="flex items-center">Created using:</p>
         <div className="flex gap-1">
            {languages.map((language, index) => (
               <span
                  key={index}
                  className="text-xs bg-gray-200 dark:bg-white dark:text-black p-2 rounded-lg"
               >
                  {language}
               </span>
            ))}
         </div>
      </div>
   );
};

export default CreatedUsing;
