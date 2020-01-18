// react libraries
import * as React from 'react';

// styles
import './Card.css';

const Card = ({ classes, children }) => {
  const getClasses = classes ? `card card__${classes}` : 'card';
  return (
    <div
      className={getClasses}
    >
      { children }
    </div>
)}

export default Card;