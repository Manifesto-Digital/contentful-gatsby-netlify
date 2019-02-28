import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import PaddedBox from '../../padded-box';

export const PressItem = styled(PaddedBox)`
  position: relative;
`;

export const PostedDate = styled.p`
  color: ${({ theme }) => theme.palette.grey45};
`;

export const ArrowIcon = styled(SVG)``;
