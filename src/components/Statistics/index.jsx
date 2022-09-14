import { render } from '@testing-library/react';
import React from 'react';
import css from './Statistics.module.css';

class Statistics extends React.Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  handelGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handelNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handelBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  render() {
    return (
      <div className="Counter">
        <h1 className={css.title}>Please leave feedback</h1>
        <div className={css.buttonsList}>
          <button type="button" onClick={this.handelGood}>
            <span>Good</span>
          </button>
          <button type="button" onClick={this.handelNeutral}>
            <span>Neutral</span>
          </button>
          <button type="button" onClick={this.handelBad}>
            <span>Bad</span>
          </button>
        </div>
        <h2 className={css.title}>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
