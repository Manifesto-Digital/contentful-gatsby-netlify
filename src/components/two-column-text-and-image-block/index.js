import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import InlineCallOut from '../inline-callout';
import { richTextPropTypes } from '../../prop-types';

// Styles
import {
  OuterContainer,
  Row,
  HeaderText,
  FlexContainer,
  ContentSemi,
  TextWrapper,
} from './styles';

const TwoColumnTextAndImageBlock = ({ data, insideContainer }) => {
  const {
    headerText,
    childContentfulTopicTwoColumnTextAndImageBlockLeftColumnTextRichTextNode: leftColumnRichText,
    leftColumnCalloutBanners,
    rightColumnImage,
    rightColumnCalloutBanners,
    theme: backgroundColour,
  } = data;

  return (
    <OuterContainer
      backgroundColour={backgroundColour}
      padding={!insideContainer}
    >
      <Row backgroundColour={backgroundColour}>
        <FlexContainer>
          <ContentSemi>
            <HeaderText backgroundColour={backgroundColour}>
              {headerText}
            </HeaderText>
            <TextWrapper
              backgroundColour={backgroundColour}
              richText={leftColumnRichText}
            />
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
    leftColumnRichText: PropTypes.shape(richTextPropTypes).isRequired,
    leftColumnCalloutBanners: PropTypes.array,
    rightColumnImage: PropTypes.object,
    rightColumnCalloutBanners: PropTypes.array,
    backgroundColour: PropTypes.oneOf(['White', 'Black', 'Grey']).isRequired,
  }),
  insideContainer: PropTypes.bool,
};

TwoColumnTextAndImageBlock.defaultProps = {
  insideContainer: false,
};

export default TwoColumnTextAndImageBlock;
