import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large} 0;
  background-color: ${({ bg, theme }) =>
    (bg === 'Black' && '#000000') || (bg === 'Grey' && theme.palette.grey90)};
  color: ${({ theme }) => theme.palette.white};
`;

export const PerksList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Perk = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const IconWrapper = styled(SVG)`
  width: 15%;
  margin-right: ${({ theme }) => theme.spacing.small};
`;
