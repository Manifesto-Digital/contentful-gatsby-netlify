import React from 'react';
import PropTypes from 'prop-types';

const LegalSubPageList = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <p>{item.label}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

LegalSubPageList.propTypes = {
  items: PropTypes.array,
};

export default LegalSubPageList;
