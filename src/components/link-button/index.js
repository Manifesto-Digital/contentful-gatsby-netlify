import styled from 'styled-components';
import { linkStyles } from '../styled/links';
import { buttonReset } from '../styled/buttons';

/**
 * A button that looks like a link
 */
const LinkButton = styled.button`
  ${buttonReset};
  ${linkStyles};
`;

export default LinkButton;
