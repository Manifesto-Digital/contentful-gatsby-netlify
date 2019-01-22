import styled from 'styled-components';
import Slider from 'rc-slider/lib/Slider';

const railHeight = 10;
const handleSize = 30;
const markHeight = 35;

const handleOverflow = (handleSize - railHeight) / 2;

export const markStyle = isActive => ({
  position: 'absolute',
  display: 'inline-block',
  verticalAlign: 'middle',
  textAlign: 'center',
  cursor: 'pointer',
  top: 0,
  lineHeight: `${markHeight}px`,
  ...(isActive ? { fontWeight: 'bold', fontSize: '1.25em' } : {}),
});

export const StyledSlider = styled(Slider).attrs({
  railStyle: {
    position: 'absolute',
    width: '100%',
    height: railHeight,
    backgroundColor: '#bdbec0',
    borderRadius: railHeight / 2,
  },
  trackStyle: {
    position: 'absolute',
    width: '100%',
    height: railHeight,
    backgroundColor: '#5a5a5a',
    borderRadius: railHeight / 2,
  },
  handleStyle: {
    position: 'absolute',
    width: handleSize,
    height: handleSize,
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid #d9d9d9',
    boxShadow:
      'inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb',
    marginLeft: -(handleSize / 2),
    marginTop: -handleOverflow,
  },
})`
  position: relative;
  padding-top: ${markHeight + handleOverflow}px;
  margin-left: ${props => props.theme.spacing.small};
  margin-right: ${props => props.theme.spacing.small};
  margin-bottom: calc(
    ${props => props.theme.spacing.large} + ${handleOverflow}px
  );
`;

export const OwnAmountButton = styled.button``;
