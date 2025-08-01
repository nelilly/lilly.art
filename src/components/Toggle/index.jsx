import PropTypes from 'prop-types';
import { 
  toggle,
  display,
  icon,
  iconCheck,
  iconCross,
} from './style.module.css';

const Toggle = ({id, label, toggleValue, toggleFunction}) => {
  const handleToggle = () => {
    toggleFunction(!toggleValue);
    return !toggleValue;
  };

  return (
    <label className={toggle} htmlFor={id}>
      <input type="checkbox" name={id} checked={toggleValue} onChange={(toggleValue) => handleToggle(toggleValue)} id={id} />
      <span className={display} hidden>
        <svg
          aria-hidden="true"
          focusable="false"
          className={`${icon} ${iconCheck}`}
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
        >
          <path
            d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z"
            fill="currentcolor"
            stroke="currentcolor"
          />
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          className={`${icon} ${iconCross}`}
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z"
            fill="currentcolor"
          />
        </svg>
      </span>
      {label}
    </label>
  );
};

export default Toggle;

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  toggleValue: PropTypes.bool.isRequired,
  toggleFunction: PropTypes.func.isRequired,
};
