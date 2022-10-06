import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from 'FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from 'Notification/Notification';
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);
  const options = { good, neutral, bad };

  const handleIncreament = event => {
    console.log(event.target.name);
    setHasFeedback(true);
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = options;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleIncreament} options={options} />
      </Section>

      {hasFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

export default App;
