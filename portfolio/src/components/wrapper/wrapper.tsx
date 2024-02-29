import React from 'react';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <div className="flex items-center justify-center font-mono">
         <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
         </div>
      </div>
   );
};

export default Wrapper;
