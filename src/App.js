import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
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
  };

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

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>Search Bar</h1>
      <style jsx>
        {`
          .search-wrapper {
            display: flex;
            justify-content: center;
            margin: 20px auto;
          }

          .search-input {
            display: block;
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
            background-color: #f5f5f5;
            color: #333;
          }

          .displayed-text {
            text-align: center;
            font-size: 36px;
            color: red;
            margin-top: 10px;
          }

          .pizza-image {
            display: block;
            width: 500px;
            height: auto;
            margin: 10px auto;
          }
        `}
      </style>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
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
  );
}

export default App;
