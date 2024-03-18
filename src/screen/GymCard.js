import React from 'react';
import './Gymcard.css'
const GymCard = ({ exercise }) => {
    return (
        <div className="gymcard">
            <img src={exercise.gifUrl} alt={exercise.name} className="gymcard-img" />
            <h2 className="gymcard-h2">{exercise.name}</h2>
            <p className="gymcard-p">{exercise.type}</p>
            <p className="gymcard-p">{exercise.target}</p>
            <p className="gymcard-p">{exercise.bodyPart}</p>
        </div>
    );
};

export default GymCard;