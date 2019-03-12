import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import LoadMoreIcon from '../../../assets/svg/icons/sync-alt-regular.svg';
import { Container } from '../../styled/containers';
import Card from '../card';
import { List, LoadMore, LoadMoreButton, Wrapper } from './styles';

const PersonCardList = ({
  list,
  insideContainer,
  borderTop,
  columns,
  limit,
  defaultLimit,
}) => {
  const initialLimit = limit || defaultLimit;
  const [count, updateCount] = useState(initialLimit);

  if (!list) return null;
  const totalLength = list.length;

  const loadMore = () => {
    updateCount(count + initialLimit);
  };

  return (
    <Wrapper borderTop={borderTop}>
      <Container padding={!insideContainer}>
        <List columns={columns}>
          {list.slice(0, count).map((person, i) => (
            <Card
              key={person.id + i}
              person={person}
              columns={columns}
              link={
                person.page_assembly___person_
                  ? person.page_assembly___person_[0] // Link is only present if a person page assembly exists for this person
                  : null
              }
            />
          ))}
        </List>
        {/* Only render if was visible at the beginning */}
        {Math.min(defaultLimit, limit) < totalLength && (
          <LoadMore visible={totalLength > count}>
            <LoadMoreButton type="button" onClick={loadMore}>
              <SVG src={LoadMoreIcon} />
            </LoadMoreButton>
          </LoadMore>
        )}
      </Container>
    </Wrapper>
  );
};

PersonCardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }),
    })
  ),
  insideContainer: PropTypes.bool,
  columns: PropTypes.number,
  borderTop: PropTypes.bool,
  limit: PropTypes.number,
  defaultLimit: PropTypes.number,
};

PersonCardList.defaultProps = {
  insideContainer: false,
  columns: 2,
  defaultLimit: 9,
};

export default PersonCardList;
