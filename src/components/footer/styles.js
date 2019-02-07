import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';
import { breakpoint } from '../theme/breakpoint';
import { StyledSVG } from '../share-block/styles';

export const Logo = styled(SVG)`
  display: block;
  width: 150px;

  ${breakpoint.desktop`
    width: 150px;
  `}
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 15px;
  background: ${({ theme }) => theme.palette.primary};
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.desktop`
    height: 68px;
    padding: ${({ theme }) => theme.spacing.standard} 25px;
    margin-right: 0;
    margin-bottom: 0;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.black};
`;

export const Top = styled.div`
  display: flex;

  > div {
    width: 100%;
  }
`;

export const Social = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  ${StyledSVG} {
    color: ${({ theme }) => theme.palette.white};
    fill: ${({ theme }) => theme.palette.white};
  }
`;

export const Menus = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  font-size: ${({ theme }) => theme.fontsize.small};

  ${breakpoint.tablet`
   flex-direction: row;
   flex-wrap: unset;
   `}

  ul {
    width: 100%;
    list-style: none;
    padding-left: 0;

    ${breakpoint.tablet`
      width: 50%;
    `}

    ${breakpoint.desktop`
      width: 100%;
    `}
  }

  a {
    color: ${({ theme }) => theme.palette.white};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export const Angle = styled.div`
  position: absolute;
  right: 102%;
  z-index: 0;
  display: none;
  width: 0;
  border-color: ${({ theme }) => theme.palette.black};
  border-style: solid;
  border-width: 100px 150px 0;
  transform: rotate(-225deg);

  ${breakpoint.desktop`
    display: block;
  `}
`;

export const Bottom = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.standard} 0;
  background: ${({ theme }) => theme.palette.primary};
  overflow: hidden;
`;

export const BottomInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column-reverse;

  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontsize.tiny};

  ${breakpoint.desktop`
   flex-direction: row;
   margin-bottom: 0;
  `}
`;

export const Text = styled.div`
  flex: 0 1 100%;
  width: 100%;

  text-align: left;
  ${breakpoint.desktop`
    flex: 0 1 50%;
    width: 50%;
    max-width: 340px;
  `}
`;
