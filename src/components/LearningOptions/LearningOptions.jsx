import React from 'react';
import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        { text: "Comedy",
         handler: props.actionProvider .handleComedyList, 
         id: 1
        },
        { text: "Drama", 
        handler: props.actionProvider .handleDramaList,
        id: 2},
        { text: "Action", 
        handler: props.actionProvider .handleActionList,
        id: 3},
        { text: "Sci-Fi", 
        handler: props.actionProvider .handleScifiList,
        id: 4},
        { text: "Thriller", 
        handler: props.actionProvider .handleThrillerList,
        id: 5},
    ];

    const optionsMarkup = options.map((option) => (
        <button
        className = "learning-option-button"
        key={option.id}
        onClick={option.handler}
        >
            {option.text}
        </button>
    ));
    return <div className="learning-options-container">{optionsMarkup}</div>
};

export default LearningOptions;
