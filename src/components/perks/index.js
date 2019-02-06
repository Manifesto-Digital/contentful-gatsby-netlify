import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import { Wrapper, PerksList, Perk, IconWrapper, Caption } from './styles';
import iconSrc from '../../utils/iconSrc';
import { consistentString } from '../../utils/content-formatting';

const Perks = ({ data, insideContainer }) => {
  const { headerText, theme, eventIcons } = data;

  if (!eventIcons || eventIcons.length === 0) return null;

  return (
    <Wrapper bg={consistentString(theme)}>
      <Container padding={!insideContainer}>
        {headerText !== null && <h2>{headerText}</h2>}

        <PerksList>
          {eventIcons.map((eventIcon, key) => (
            <Perk key={key}>
              <IconWrapper src={iconSrc(eventIcon)} />
              <Caption>{eventIcon}</Caption>
            </Perk>
          ))}
        </PerksList>
      </Container>
    </Wrapper>
  );
};

Perks.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string,
    theme: PropTypes.oneOf(['Grey', 'Black']),
    eventIcons: PropTypes.array,
  }),
  insideContainer: PropTypes.bool,
};

export default Perks;
