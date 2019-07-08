import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';
import { breakpoint } from '../theme/breakpoint';
import { StyledSVG } from '../share-block/styles';
import LinkHandler from '../link-handler';
import Accordion from '../accordion';
import { HeadingButton, Heading, Content } from '../accordion/styles';

export const Logo = styled(SVG)`
  display: block;
  width: 150px;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin-right: auto;

  ${breakpoint.desktop`
    margin-bottom: ${({ theme }) => theme.spacing.standard};
    padding: ${({ theme }) => theme.spacing.standard} 25px;
    margin-right: 0;
    margin-bottom: 0;
  `}
`;

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.black};
  margin-top: ${({ theme, removeMarginTop }) =>
    removeMarginTop ? '0' : theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.tablet`
    padding-top: ${({ theme }) => theme.spacing.xl};
  `}
`;

export const Top = styled.div`
  display: flex;

  > div {
    width: 100%;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${StyledSVG} {
    color: ${({ theme }) => theme.palette.white};
    fill: ${({ theme }) => theme.palette.white};
  }
`;

export const Menus = styled.nav`
  width: 100%;
  font-size: ${({ theme }) => theme.fontsize.small};
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${({ theme }) => theme.spacing.standard};

  @media (min-width: '641px') {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${({ theme }) => theme.spacing.standard};
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  ${breakpoint.desktop`
    width: auto;
  `}
`;

export const ItemLink = styled(LinkHandler)`
  font-size: ${({ theme }) => theme.fontsize.small};
  color: ${({ theme }) => theme.palette.white};

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  padding-left: 0;
`;

export const Bottom = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.large} 0;
  background-color: ${({ theme }) => theme.palette.grey66};
  overflow: hidden;
`;

export const BottomInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontsize.small};

  ${breakpoint.desktop`
    flex-direction: row;
    margin-bottom: 0;
  `}
`;

export const ContentWrapper = styled.div`
  flex: 0 1 100%;
  width: 100%;
  text-align: left;
`;

export const FooterAccordion = styled(Accordion)`
  flex: 1;
  color: ${({ theme }) => theme.palette.grey10};

  &:not(:first-of-type) {
    &:before {
      border-top: ${({ theme, active }) =>
        active && `1px solid ${theme.palette.grey45}`};
    }
  }

  h3 {
    ${breakpoint.tablet`
      margin-bottom: ${({ theme }) => theme.spacing.large};
  `};
  }

  ${Content} {
    padding-left: ${({ theme }) => theme.spacing.standard};
  }
  ${Heading} {
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.palette.primary : theme.palette.white};
    ${breakpoint.tablet`
      font-size: ${({ theme }) => theme.headers.h3};
  `};
  }
  ${HeadingButton} {
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.palette.primary : theme.palette.white};
    padding-left: ${({ theme }) => theme.spacing.standard};
  }
`;

export const SiteDate = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 37px;
  ${breakpoint.tablet`
       width: 43px;
      `};
`;

export const Text = styled.small`
  position: relative;
  width: 100%;

  div {
    &:last-child {
      text-indent: 37px;
      ${breakpoint.tablet`
       text-indent: 43px;
      `};
    }
  }
`;
