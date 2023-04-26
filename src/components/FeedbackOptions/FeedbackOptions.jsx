import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => (
        <li key={option}>
          <Button
            text={option.slice(0, 1).toUpperCase() + option.slice(1)}
            clickHandler={onLeaveFeedback}
          />
        </li>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
