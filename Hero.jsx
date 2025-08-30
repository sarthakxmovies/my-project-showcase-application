import React from 'react';

const Hero = () => {
  return (
    <section className="relative text-center py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 mb-6 leading-tight">
          Welcome to My Portfolio
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Discover my latest blogs and projects
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>🚀</span>
            <span>Latest Projects</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>📝</span>
            <span>Technical Blogs</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>💡</span>
            <span>Creative Ideas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;