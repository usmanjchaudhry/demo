import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfileCreation from './ProfileCreation'; // Make sure this import points to the correct file path

const ARRAY_OF_RECIPES = [
  { name: 'Hamburger', type: 'Fast Food', ingredients: ['Bun', 'Patty', 'Lettuce', 'Tomato'] },
  { name: 'Cookies', type: 'Dessert', ingredients: ['Flour', 'Sugar', 'Eggs', 'Chocolate Chips'] },
  { name: 'Hot Dogs', type: 'Fast Food', ingredients: ['Bun', 'Sausage', 'Mustard', 'Ketchup'] },
  { name: 'Chicken', type: 'Main Course', ingredients: ['Chicken', 'Salt', 'Pepper', 'Garlic'] },
  { name: 'Steaks', type: 'Main Course', ingredients: ['Steak', 'Salt', 'Pepper', 'Butter'] },
  { name: 'Others', type: 'Miscellaneous', ingredients: ['Unknown'] }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
<<<<<<< HEAD
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [itemsPerPage] = useState(5); // Number of items per page
  const [displayedItems, setDisplayedItems] = useState([]); // State for displayed items
  const [displayText, setDisplayText] = useState(''); // State for displayed text
  const [showPizzaImage, setShowPizzaImage] = useState(false); // State for image display

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
    setDisplayText(event.target.value); // Update displayed text
    setShowPizzaImage(event.target.value.toLowerCase() === 'pizza'); // Check for "pizza" (lowercase)
=======
  const [displayText, setDisplayText] = useState('');
  const [showPizzaImage, setShowPizzaImage] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setDisplayText(event.target.value);
    setShowPizzaImage(event.target.value.toLowerCase() === 'pizza');
>>>>>>> c70416fdef348f7166c1fdfca9068529b4fb7b0c
  };

<<<<<<< HEAD
  // Sample data for pagination
  const allItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedItems(allItems.slice(startIndex, endIndex));
  };

  // Effect to set displayed items on initial render and when currentPage changes
  React.useEffect(() => {
    paginate(currentPage);
  }, [currentPage]); // Re-run whenever currentPage changes
=======
  const handleIngredientChange = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedIngredients(value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
>>>>>>> 29140f9dac4330752fbfab338a8b0d365d7769af

  return (
    <Router>
      <div className="App">
        <h1 style={{ textAlign: 'center', color: '#007bff' }}>Recipe Finder</h1>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          {displayText && <div className="displayed-text">{displayText}</div>}
          {showPizzaImage && (
            <img src="https://thumbs.dreamstime.com/b/sketch-smiling-italian-chef-holding-pizza-his-hand-style-vector-illustration-white-background-charming-74048679.jpg" alt="Pizza" className="pizza-image" />
          )}
          <Link to="/create-profile">
            <button className="profile-button">Create Profile</button>
          </Link>
        </div>
        <div className="filters">
          <select value={selectedIngredients} onChange={handleIngredientChange} multiple className="ingredient-select">
            {['Bun', 'Patty', 'Lettuce', 'Tomato', 'Flour', 'Sugar', 'Eggs', 'Chocolate Chips'].map(ingredient => (
              <option key={ingredient} value={ingredient}>{ingredient}</option>
            ))}
          </select>
          <select value={selectedType} onChange={handleTypeChange} className="type-select">
            <option value="">Select Type</option>
            {['Fast Food', 'Dessert', 'Main Course', 'Miscellaneous'].map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <Routes>
          <Route path="/" element={<div>Welcome to Recipe Finder!</div>} />
          <Route path="/create-profile" element={<ProfileCreation />} />
        </Routes>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="displayed-text">{displayText || ''}</div>
      {/* Displayed items */}
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(allItems.length / itemsPerPage)}>
          Next
        </button>
      </div>
      {/* Pizza image */}
      {showPizzaImage && (
        <img src="https://thumbs.dreamstime.com/b/sketch-smiling-italian-chef-holding-pizza-his-hand-style-vector-illustration-white-background-charming-74048679.jpg" alt="Pizza" className="pizza-image" />
      )}
    </div>
=======
    </BrowserRouter>
>>>>>>> c70416fdef348f7166c1fdfca9068529b4fb7b0c
=======
      <style>{`
        .App {
          font-family: Arial, sans-serif;
        }

        .search-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }

        .search-input, .ingredient-select, .type-select {
          width: 90%;
          max-width: 500px;
          padding: 10px;
          margin: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          box-sizing: border-box;
        }

        .displayed-text {
          text-align: center;
          font-size: 24px;
          color: red;
          margin: 10px 0;
        }

        .pizza-image {
          width: 100%;
          max-width: 300px;
          height: auto;
          margin: 20px 0;
        }

        .profile-button {
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
        }

        .filters {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </Router>
>>>>>>> 29140f9dac4330752fbfab338a8b0d365d7769af
  );
}

export default App;
