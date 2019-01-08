import styled from 'styled-components';
import { linkStyles } from '../styled/links';
import { buttonReset } from '../styled/buttons';

const LinkButton = styled.button`
  ${buttonReset};
  ${linkStyles};
`;

export default LinkButton;
