import React from 'react';
import './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        <span>{option}</span>
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
