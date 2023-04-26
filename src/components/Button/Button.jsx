import PropTypes from 'prop-types';

export const Button = ({ text, clickHandler }) => (
  <button type="button" id={text.toLowerCase()} onClick={clickHandler}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};
