import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { Container } from '../styled/containers';
import { consistentString } from '../../utils/content-formatting';
import iconSrc from '../styled/iconSrc';

const ChallengeEventIcons = ({ data, insideContainer }) => {
  const { headerText, theme, eventIcons } = data;

  return (
    <div bgColour={theme}>
      <Container padding={!insideContainer}>
        {headerText !== null && <h2>{headerText}</h2>}

        <div>
          {eventIcons.map((eventIcon, key) => (
            <div key={key}>
              <SVG src={iconSrc(consistentString(eventIcon))} />
              {eventIcon}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

ChallengeEventIcons.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string,
    theme: PropTypes.oneOf(['Grey', 'Black']),
    eventIcons: PropTypes.array,
  }),
  insideContainer: PropTypes.bool,
};

export default ChallengeEventIcons;
