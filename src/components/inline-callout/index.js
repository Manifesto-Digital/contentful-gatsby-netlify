import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../prop-types';
import { consistentString } from '../../utils/content-formatting';
// Components
import Icon from './icon';
// Styles
import { InlineBanner, TextWrapper } from './styles';

const InlineCallOut = ({ content }) => {
  const { icon, borderColour, bannerColour } = content;
  const callOutText = content.content;
  return (
    <InlineBanner
      borderCol={consistentString(borderColour)}
      bannerCol={consistentString(bannerColour)}
    >
      <Icon icon={consistentString(icon)} />
      <TextWrapper richText={callOutText} />
    </InlineBanner>
  );
};

InlineCallOut.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.shape(richTextPropTypes).isRequired,
    icon: PropTypes.string,
    borderColour: PropTypes.string,
    bannerColour: PropTypes.string,
  }),
};

export default InlineCallOut;
