import React from 'react';

const Navbar = ({ isDarkMode, toggleTheme, currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={() => setCurrentPage('home')}
          >
            Portfolio
          </div>
          
          <ul className="flex space-x-8">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setCurrentPage(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center">
            <button 
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={toggleTheme}
            >
              <span className="text-lg">{isDarkMode ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;