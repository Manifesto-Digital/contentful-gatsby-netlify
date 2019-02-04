import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  OuterContainer,
  Row,
  HeaderText,
  FlexContainer,
  ContentSemi,
  TextWrapper,
} from './styles';
/* import RichText from '../rich-text'; */
import Image from '../image';
import InlineCallOut from '../inline-callout';

const TwoColumnTextAndImageBlock = ({ data, insideContainer }) => {
  const {
    headerText,
    childContentfulTopicTwoColumnTextAndImageBlockLeftColumnTextRichTextNode: leftColumnRichText,
    leftColumnCalloutBanners,
    rightColumnImage,
    rightColumnCalloutBanners,
    theme,
  } = data;

  return (
    <OuterContainer colour={theme} padding={!insideContainer}>
      <Row colour={theme}>
        <FlexContainer>
          <ContentSemi>
            <HeaderText colour={theme}>{headerText}</HeaderText>
            <TextWrapper colour={theme} richText={leftColumnRichText} />
            {leftColumnCalloutBanners &&
              leftColumnCalloutBanners.map(calloutBanner => (
                <InlineCallOut
                  content={calloutBanner}
                  insideContainer={!insideContainer}
                />
              ))}
          </ContentSemi>
          <ContentSemi>
            {rightColumnImage && <Image image={rightColumnImage} />}
            {rightColumnCalloutBanners &&
              rightColumnCalloutBanners.map(calloutBanner => (
                <InlineCallOut
                  content={calloutBanner}
                  insideContainer={!insideContainer}
                />
              ))}
          </ContentSemi>
        </FlexContainer>
      </Row>
    </OuterContainer>
  );
};

// TODO: There seems to be a better way of handling RichText in here (eg "leftColumnRichText: PropTypes.shape(richTextPropTypes).isRequired")
TwoColumnTextAndImageBlock.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    childContentfulTopicTwoColumnTextAndImageBlockLeftColumnTextRichTextNode:
      PropTypes.object.isRequired,
    leftColumnCalloutBanners: PropTypes.array,
    rightColumnImage: PropTypes.object,
    rightColumnCalloutBanners: PropTypes.array,
    theme: PropTypes.string.isRequired, // TODO: Maybe change this to "backgroundColour" and change "string" to "oneOf([])" with the current options
  }),
  insideContainer: PropTypes.bool,
};

TwoColumnTextAndImageBlock.defaultProps = {
  insideContainer: false,
};

export default TwoColumnTextAndImageBlock;
