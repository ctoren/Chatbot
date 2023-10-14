import React from 'react';
import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        { text: "Comedy",
         handler: props.actionProvider .handleJavascriptList, 
         id: 1
        },
        { text: "Drama", handler: () => {}, id: 2},
        { text: "Action", handler: () => {}, id: 3},
        { text: "Sci-Fi", handler: () => {}, id: 4},
        { text: "Horror", handler: () => {}, id: 5},
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