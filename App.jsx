import React, { useState, useEffect } from 'react';
import './App.css';
import { portfolioData } from './Data/portfolioData';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SearchFilter from './Components/Searchfilter';
import Card from './Components/Card';
import DetailView from './Components/Detailview';
import Footer from './Components/Footer';

function App() {
  // State management
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentView, setCurrentView] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Apply dark mode to body
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Enhanced search utility functions
  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '') // Remove special characters, spaces, hyphens
      .trim();
  };

  const matchesSearch = (item, query) => {
    if (!query.trim()) return true;
    
    const normalizedQuery = normalizeString(query);
    
    // Check title
    const normalizedTitle = normalizeString(item.title);
    if (normalizedTitle.includes(normalizedQuery)) return true;
    
    // Check description
    const normalizedDescription = normalizeString(item.description);
    if (normalizedDescription.includes(normalizedQuery)) return true;
    
    // Check tags
    const normalizedTags = item.tags.map(tag => normalizeString(tag));
    if (normalizedTags.some(tag => tag.includes(normalizedQuery))) return true;
    
    // Word-by-word matching for better flexibility
    const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    // Check if all query words are found somewhere in the item
    return queryWords.every(queryWord => {
      const titleWords = item.title.toLowerCase().split(/\s+/);
      const descWords = item.description.toLowerCase().split(/\s+/);
      const tagWords = item.tags.flatMap(tag => tag.toLowerCase().split(/\s+/));
      
      const allWords = [...titleWords, ...descWords, ...tagWords];
      
      return allWords.some(word => 
        word.includes(queryWord) || queryWord.includes(word)
      );
    });
  };

  // Enhanced filter and search logic with page filtering
  const getFilteredData = () => {
    return portfolioData.filter(item => {
      // Page-based filtering (NEW)
      let matchesPage = true;
      if (currentPage === 'blogs') {
        matchesPage = item.type === 'blog';
      } else if (currentPage === 'projects') {
        matchesPage = item.type === 'project';
      }
      // 'home' and 'about' show all items
      
      // Filter logic
      const matchesFilter = currentFilter === 'all' ||
                           item.type === currentFilter ||
                           item.tags.includes(currentFilter);
      
      // Enhanced search logic
      const matchesSearchQuery = matchesSearch(item, searchQuery);
      
      return matchesPage && matchesFilter && matchesSearchQuery;
    });
  };

  // Handle navigation (NEW)
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setCurrentView('home'); // Always go back to main view
    setSelectedItem(null);
    
    // Auto-set filter based on page
    if (page === 'blogs') {
      setCurrentFilter('blog');
    } else if (page === 'projects') {
      setCurrentFilter('project');
    } else {
      setCurrentFilter('all');
    }
    
    // Clear search when navigating
    setSearchQuery('');
  };

  // Handle card click
  const handleCardClick = (itemId) => {
    const item = portfolioData.find(item => item.id === itemId);
    setSelectedItem(item);
    setCurrentView('detail');
  };

  // Handle back to home
  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedItem(null);
  };

  // Get filtered data
  const filteredData = getFilteredData();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        setCurrentPage={handleNavigation} // Changed to handleNavigation
      />

      <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 rounded-2xl shadow-lg transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700 shadow-2xl' 
            : 'bg-white border border-gray-200 shadow-md'
        }`}>
          {currentView === 'home' ? (
            <>
              {/* Show Hero only on home page */}
              {currentPage === 'home' && (
                <div className="mb-8">
                  <Hero />
                </div>
              )}
              
              {/* Page-specific headers with enhanced dark mode colors */}
              {currentPage === 'blogs' && (
                <div className="text-center py-12 mb-8">
                  <h1 className={`text-4xl font-bold mb-4 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    My Blogs
                  </h1>
                  <p className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Thoughts, tutorials, and insights about web development
                  </p>
                </div>
              )}
              
              {currentPage === 'projects' && (
                <div className="text-center py-12 mb-8">
                  <h1 className={`text-4xl font-bold mb-4 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    My Projects
                  </h1>
                  <p className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Showcase of my latest work and creative solutions
                  </p>
                </div>
              )}
              
              {currentPage === 'about' && (
                <div className="text-center py-12 mb-8">
                  <h1 className={`text-4xl font-bold mb-4 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    About Me
                  </h1>
                  <p className={`text-lg max-w-2xl mx-auto ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    I'm a passionate web developer with expertise in React, JavaScript, and modern web technologies. 
                    I love creating user-friendly applications and sharing knowledge through blogs and projects.
                  </p>
                </div>
              )}
              
              {/* Show SearchFilter except on About page */}
              {currentPage !== 'about' && (
                <div className="mb-8">
                  <SearchFilter
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    currentFilter={currentFilter}
                    setCurrentFilter={setCurrentFilter}
                    resultCount={filteredData.length}
                  />
                </div>
              )}

              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className={`text-lg font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Loading content...
                  </div>
                </div>
              ) : currentPage === 'about' ? (
                // About page content with enhanced dark mode
                <div className="max-w-4xl mx-auto py-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className={`text-2xl font-bold mb-6 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        Skills & Technologies
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB', 'Git'].map(skill => (
                          <div 
                            key={skill} 
                            className={`p-4 rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md ${
                              isDarkMode 
                                ? 'bg-gray-700 border-gray-600 text-gray-100 hover:bg-gray-650' 
                                : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100'
                            }`}
                          >
                            <span className="font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold mb-6 ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        Experience
                      </h2>
                      <p className={`leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        With years of experience in web development, I specialize in creating 
                        responsive, user-friendly applications using modern frameworks and best practices. 
                        I'm passionate about clean code, performance optimization, and delivering 
                        exceptional user experiences.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Projects and Blogs grid
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                  {filteredData.length > 0 ? (
                    filteredData.map(item => (
                      <Card
                        key={item.id}
                        item={item}
                        onClick={handleCardClick}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-20">
                      <h3 className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        No items found
                      </h3>
                      <p className={`mb-4 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {searchQuery.trim() 
                          ? `No results found for "${searchQuery}"` 
                          : `No ${currentPage === 'blogs' ? 'blogs' : currentPage === 'projects' ? 'projects' : 'items'} available`
                        }
                      </p>
                      {searchQuery.trim() && (
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          Try different keywords or check your spelling
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <DetailView
              item={selectedItem}
              onBack={handleBackToHome}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
