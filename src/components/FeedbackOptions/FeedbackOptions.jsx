import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((key, index) => (
        <li key={index}>
          <Button onClick={() => onLeaveFeedback(key)}>{key}</Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
