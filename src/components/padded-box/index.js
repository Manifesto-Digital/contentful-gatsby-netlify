import styled, { css } from 'styled-components';

const getStyles = ({
  bg = 'offWhite',
  padding = 'standard',
  shadow = false,
}) => {
  const styles = css`
    padding: ${props => props.theme.spacing[padding]};
    background-color: ${props => props.theme.palette[bg]};
    box-shadow: ${props =>
      shadow === false ? 0 : props.theme.boxshadow.small};
    border-radius: ${props =>
      shadow === false ? 0 : props.theme.borderradius.small};
  `;

  return styles;
};

const PaddedBox = styled.div`
  ${getStyles}
`;

export default PaddedBox;
