import React from 'react';
import PropTypes from 'prop-types';
import LinkHandler from '../link-handler';
import { List, Item } from './styles';

const LegalSubPageList = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <List>
        {items.map((item, i) => (
          <Item key={i}>
            <h3>
              <LinkHandler internalLink={{ slug: item.slug }}>
                {item.label}
              </LinkHandler>
            </h3>
            <p>{item.description}</p>
          </Item>
        ))}
      </List>
    </div>
  );
};

LegalSubPageList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LegalSubPageList;
