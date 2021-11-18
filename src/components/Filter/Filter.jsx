import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, forChange }) {
  return (
    <label className={s.filter}>
      Find contacts by name:
      <input
        type="text"
        value={value}
        className={s.input}
        onChange={forChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  forChange: PropTypes.func.isRequired,
};
