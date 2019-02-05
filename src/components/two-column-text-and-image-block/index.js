import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';
import InlineCallOut from '../inline-callout';
import { richTextPropTypes } from '../../prop-types';
import { Container } from '../styled/containers';
import { consistentString } from '../../utils/content-formatting';

// Styles
import {
  OuterContainer,
  HeaderText,
  FlexContainer,
  ContentSemi,
  TextWrapper,
} from './styles';

const TwoColumnTextAndImageBlock = ({ data, insideContainer }) => {
  const {
    headerText,
    leftColumnText,
    leftColumnCalloutBanners,
    rightColumnImage,
    rightColumnCalloutBanners,
  } = data;

  if (!headerText || !leftColumnText) {
    return null;
  }

  const backgroundColour = consistentString(data.backgroundColour);

  return (
    <OuterContainer
      backgroundColour={backgroundColour}
      padding={!insideContainer}
    >
      <Container>
        <FlexContainer>
          <ContentSemi>
            <HeaderText backgroundColour={backgroundColour}>
              {headerText}
            </HeaderText>
            <TextWrapper
              backgroundColour={backgroundColour}
              richText={leftColumnText}
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
      </Container>
    </OuterContainer>
  );
};

TwoColumnTextAndImageBlock.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    leftColumnText: PropTypes.shape(richTextPropTypes).isRequired,
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
