import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = rating => {
    this.setState(prevState => ({ [rating]: (prevState[rating] += 1) }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good }, total) => {
    const positiveFeedback = good;
    return total !== 0 ? Math.round((positiveFeedback / total) * 100) : 0;
  };

  hasFeedback = ({ good, neutral, bad }) => {
    return good > 0 || neutral > 0 || bad > 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      this.state,
      totalFeedback
    );

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.hasFeedback(this.state) ? (
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
  }
}
