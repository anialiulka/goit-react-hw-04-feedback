import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;

  const handleClick = rating => {
    setState(prevState => ({
      ...prevState,
      [rating]: (prevState[rating] += 1),
    }));
  };

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const totalFeedback = countTotalFeedback(state);

  const countPositiveFeedbackPercentage = ({ good }, total) => {
    const positiveFeedback = good;
    return total !== 0 ? Math.round((positiveFeedback / total) * 100) : 0;
  };

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(
    state,
    totalFeedback
  );

  const hasFeedback = ({ good, neutral, bad }) => {
    return good > 0 || neutral > 0 || bad > 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {hasFeedback(state) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
