import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import './Collapse.scss';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collapse = (props) => {
  const { name, description } = props;
  
  //permet à un composants de gérer son propre état interne pour facilite le suivi des changements au fil du temps
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
          {Array.isArray(description) ? ( // vérifie si description est un tableau.
            <ul>
              {description.map((item, index) => (   //pour itérer sur les éléments d'un tableau.
                <li key={index}>{item}</li> // pour identifier les éléments de manière unique lors de leur rendu
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
//apporte des vérifications supplémentaires pour s'assurer que les props sont utilisées correctement
Collapse.propTypes = {  // peut être utile pour maintenir et comprendre le code à long terme
  name: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;



