import React, { useState } from 'react';

import './GymSearch.css'

const GymSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className="gym-search">
            <input
                type="text"
                placeholder="Search by target, body part, or exercise"
                className="gym-search-input"
                value={searchQuery}
                onChange={handleSearchChange} 
            />
        </div>
    );
};

export default GymSearch;