import React from 'react';
import './searchbar.css'; // Import the CSS file for styling

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBar;