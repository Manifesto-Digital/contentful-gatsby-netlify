import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../prop-types';
import { consistentString } from '../../utils/content-formatting';
// Components
import icons from '../styled/icons';
// Styles
import { InlineBanner, TextWrapper, BannerSVG } from './styles';
import { Container } from '../styled/containers';

const InlineCallOut = ({ content, insideContainer }) => {
  const { icon, borderColour, bannerColour } = content;
  const callOutText = content.content;
  return (
    <Container padding={!insideContainer}>
      <InlineBanner
        borderCol={consistentString(borderColour)}
        bannerCol={consistentString(bannerColour)}
      >
        <BannerSVG src={icons(consistentString(icon))} />
        <TextWrapper richText={callOutText} />
      </InlineBanner>
    </Container>
  );
};

InlineCallOut.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.shape(richTextPropTypes).isRequired,
    icon: PropTypes.string,
    borderColour: PropTypes.string,
    bannerColour: PropTypes.string,
  }),
  insideContainer: PropTypes.bool,
};

InlineCallOut.defaultProps = {
  insideContainer: false,
};
export default InlineCallOut;
