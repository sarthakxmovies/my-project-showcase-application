import React from 'react';

const Card = ({ item, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700"
      onClick={() => onClick(item.id)}
    >
      <div className="p-6 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600">
        <div className="text-4xl mb-2">
          {item.type === 'blog' ? '📖' : '💻'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {item.date} • {item.readTime}
          </span>
          
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.type === 'blog' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
          }`}>
            {item.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;