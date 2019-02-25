import React from 'react';
import PropTypes from 'prop-types';
import iconSrc from '../../../utils/iconSrc';
// Styles
import { UnorderedList, ListItem, ListIcon } from './styles';

const List = ({ items, type }) => {
  console.log('items', items);

  const icon = type === 'yes' ? iconSrc('tick') : iconSrc('cross');

  return (
    <UnorderedList>
      {items.map((item, i) => (
        <ListItem key={i} icon={icon}>
          <ListIcon src={icon} />
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(['yes', 'no']).isRequired,
};

export default List;
