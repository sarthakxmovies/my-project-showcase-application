import React from 'react';

const DetailView = ({ item, onBack, isDarkMode }) => {
  if (!item) return null;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <button 
        className={`inline-flex items-center gap-2 mb-8 px-4 py-2 transition-colors duration-200 font-medium ${
          isDarkMode 
            ? 'text-blue-400 hover:text-blue-300' 
            : 'text-blue-600 hover:text-blue-800'
        }`}
        onClick={onBack}
      >
        <span className="text-lg">←</span>
        Back to Home
      </button>
      
      <div className={`mb-8 pb-6 border-b ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <h1 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${
          isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {item.title}
        </h1>
        
        <div className={`flex flex-wrap gap-4 text-sm ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          <span className="flex items-center gap-1">
            <span>📅</span>
            {item.date}
          </span>
          
          <span className="flex items-center gap-1">
            <span>👤</span>
            {item.author}
          </span>
          
          <span className="flex items-center gap-1">
            <span>⏱️</span>
            {item.readTime}
          </span>
          
          <span className="flex items-center gap-1">
            <span>🏷️</span>
            {item.tags.join(', ')}
          </span>
        </div>
      </div>
      
      <div 
        className={`prose prose-lg max-w-none ${
          isDarkMode 
            ? 'prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400 prose-code:text-pink-400 prose-pre:bg-gray-800 prose-blockquote:text-gray-300 prose-strong:text-gray-200 prose-em:text-gray-300 prose-li:text-gray-300' 
            : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-code:text-pink-600 prose-pre:bg-gray-100'
        }`}
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    </div>
  );
};

export default DetailView;