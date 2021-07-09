import React from 'react';
import './components.css';

const LearningOptions = (props) => {
  const options = [
    { 
      text: "Javascript", 
      handler: props.actionProvider.handleJavascriptList, 
      id: 1 },
    { text: "Data Visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview Prep", handler: () => {}, id: 5 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-containter">{optionsMarkup}</div>;
}

export default LearningOptions;