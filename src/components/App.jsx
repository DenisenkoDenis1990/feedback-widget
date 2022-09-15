import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from 'FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from 'Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreament = event => {
    const { name } = event.target;
    console.log(Object.keys(this.state));
    this.hasFeedback = true;
    this.setState(prevState => {
      //console.log(name);
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  hasFeedback = false;

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncreament}
            options={Object.keys(this.state)}
          />
        </Section>

        {this.hasFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
