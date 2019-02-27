import styled, { css } from 'styled-components';

const getStyles = ({
  bg = 'offWhite',
  padding = 'standard',
  shadow = false,
}) => {
  const styles = css`
    padding: ${({ theme }) => theme.spacing[padding]};
    background-color: ${({ theme }) => theme.palette[bg]};
    box-shadow: ${({ theme }) =>
      shadow === false ? 0 : theme.boxshadow.small};
    border-radius: ${({ theme }) =>
      shadow === false ? 0 : theme.borderradius.small};
    margin-bottom: ${({ removeMarginBottom, theme }) =>
      removeMarginBottom ? '0' : theme.spacing.medium};
  `;

  return styles;
};

const PaddedBox = styled.div`
  ${getStyles}

  & > :last-child {
    margin-bottom: 0;
  }
`;

export default PaddedBox;
