import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from 'FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreament = () => {
    this.setState(prevState => {
      console.log(prevState.good);
      return {
        good: prevState.good + 1,
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.handleIncreament} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={0}
            positivePercentage={0}
          />
        </Section>
      </>
    );
  }
}

export default App;
