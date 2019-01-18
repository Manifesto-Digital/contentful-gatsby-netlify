import styled, { css } from 'styled-components';

const getStyles = ({ bg = 'offWhite', padding = 'standard' }) => {
  const styles = css`
    padding: ${props => props.theme.spacing[padding]};
    background-color: ${props => props.theme.palette[bg]};
  `;

  return styles;
};

const PaddedBox = styled.div`
  ${getStyles}
`;

export default PaddedBox;
