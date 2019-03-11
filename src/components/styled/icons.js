import styled from 'styled-components';

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
