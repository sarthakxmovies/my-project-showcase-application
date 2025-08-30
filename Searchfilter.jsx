import React from 'react';

const SearchFilter = ({ searchQuery, setSearchQuery, currentFilter, setCurrentFilter }) => {
  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'blog', label: 'Blogs' },
    { id: 'project', label: 'Projects' },
    { id: 'react', label: 'React' },
    { id: 'javascript', label: 'JavaScript' }
  ];

  return (
    <div className="py-8 space-y-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <div className="px-6">
        {/* Search Input with Icon */}
        <div className="max-w-md mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
            placeholder="Search blogs and projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </div>
        
        {/* Filter Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {filterOptions.map(option => (
            <button
              key={option.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                currentFilter === option.id
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 hover:shadow-sm border border-gray-200 dark:border-gray-500'
              }`}
              onClick={() => setCurrentFilter(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        {/* Results indicator */}
        {searchQuery && (
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Searching for: <span className="font-medium">"{searchQuery}"</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;