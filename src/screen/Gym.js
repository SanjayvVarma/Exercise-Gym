import React, { useEffect, useState } from 'react';
import GymCard from './GymCard';
import GymSearch from './GymSearch';
import './Gym.css';

const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [numCards, setNumCards] = useState(20);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=100';
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': 'b211b5fb45msheec81e983c6213cp1898a1jsn9bbaa6d73bb6',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
            };
            
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setExercises(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const loadMoreCards = () => {
        setNumCards(numCards + 23);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        const filteredResults = exercises.filter((exercise) =>
            exercise.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, [exercises, searchQuery]);

    return (
        <div className="container-api1">
            <h1 className="container-api-h1">Exercise List</h1>

            <GymSearch onSearch={handleSearch} />

            <div className="container-api2">
                {searchResults.length > 0
                    ? searchResults.slice(0, numCards).map((exercise) => (
                        <GymCard key={exercise.id} exercise={exercise} />
                    ))
                    : exercises.slice(0, numCards).map((exercise) => (
                        <GymCard key={exercise.id} exercise={exercise} />
                    ))}
            </div>

            {exercises.length > 0 && numCards < exercises.length && (
                <div className="container-btn">
                    <button
                        onClick={loadMoreCards}
                        className="btn"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gym;
