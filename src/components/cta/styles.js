import styled from 'styled-components';
import LinkHandler from '../link-handler';
import { buttonStyles } from '../styled/buttons';

export const CtaIcon = styled.span`
  display: inline-block;
  margin-right: 5px;

  img {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: text-bottom;
  }
`;

export const CtaText = styled.span`
  display: inline-block;
`;

export const StyledLinkHandler = styled(LinkHandler)`
  ${buttonStyles}
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom && theme.spacing.standard};
`;
