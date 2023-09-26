import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Добавляем импорт PropTypes
import './Collapse.scss';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collapse = (props) => {
  const { name, description } = props;
  const [open, setOpen] = useState(false);

  const click = () => {
    setOpen(!open);
    console.log(description);
  };

  return (
    <div className="collapse">
      <button onClick={click}>
        {name}
        <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} />
      </button>

      {open && (
        <div>
          {Array.isArray(description) ? (
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;



