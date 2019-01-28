import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import LinkHandler from '../../link-handler';
import PaddedBox from '../../padded-box';

export const PressItem = styled(PaddedBox)`
  position: relative;
`;

export const CoveringLink = styled(LinkHandler)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
`;

export const PostedDate = styled.p`
  color: ${props => props.theme.palette.grey45};
`;

export const ArrowIcon = styled(SVG)``;

export const IconHolder = styled.div`
  border-bottom-right-radius: ${props => props.theme.borderradius.small};
  background: ${props => props.theme.palette.grey45};
  color: ${props => props.theme.palette.white};
  padding-top: 3px;
  height: 30px;
  width: 30px;
  position: absolute;
  right: 3px;
  bottom: 3px;

  svg {
    width: 22px;
    height: 22px;
    display: block;
    margin: 0 auto;
  }
`;
