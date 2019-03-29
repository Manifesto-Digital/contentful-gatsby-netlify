import React from 'react';
import PropTypes from 'prop-types';
import { dateAsString } from '../../utils/dates';
import {
  Section,
  UnorderedList,
  ListItem,
  ItemTitle,
  LastAmended,
} from './styles';
import LinkHandler from '../link-handler';

const LegalWhatsNewList = ({ items, featuredItem }) => {
  if (!items || (items.length === 0 && !featuredItem)) return null;

  const Item = ({ title, lastAmended, text, slug, featured }) => (
    <ListItem featured={featured}>
      <ItemTitle>{title}</ItemTitle>
      <LastAmended>{dateAsString(lastAmended, 'DD MMM YYYY')}</LastAmended>
      <p>{text}</p>
      <LinkHandler internalLink={{ slug }}>View amended article</LinkHandler>
    </ListItem>
  );

  Item.propTypes = {
    title: PropTypes.string.isRequired,
    lastAmended: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    featured: PropTypes.bool,
  };

  return (
    <Section>
      <UnorderedList>
        {featuredItem && (
          <Item
            title={featuredItem.title}
            lastAmended={featuredItem.lastAmended}
            text={
              featuredItem.pageInformation.shortDescription.shortDescription
            }
            slug={featuredItem.slug}
            featured
          />
        )}
        {items &&
          items.map((item, i) => (
            <Item
              key={i}
              title={item.title}
              lastAmended={item.lastAmended}
              text={item.pageInformation.shortDescription.shortDescription}
              slug={item.slug}
            />
          ))}
      </UnorderedList>
    </Section>
  );
};

LegalWhatsNewList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  featuredItem: PropTypes.object,
};

export default LegalWhatsNewList;
