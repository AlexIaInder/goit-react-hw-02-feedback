import { render } from '@testing-library/react';
import FeedbackOptions from 'components/FeedbackOptions';
import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ options, total = 0, positivePercentage = 0 }) => {
  return (
    <div className="Counter">
      <ul>
        {Object.entries(options).map(([optionName, value]) => (
          <li key={optionName}>
            {`${optionName[0].toLocaleUpperCase()}${optionName.slice(1)}: `}
            {value}
          </li>
        ))}
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
