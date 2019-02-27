import React from 'react';
import ReactRecaptcha from 'react-recaptcha';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

const Recaptcha = props => {
  const siteKey =
    process.env.NODE_ENV === 'development'
      ? '6LejUYgUAAAAAFRxsWwZPCJqA8PNCLo3CXuYdMgI'
      : '6Le6UIgUAAAAAKSuQM0dGqG0_Sp6emnU6aRaglAk';

  return (
    <StyledContainer>
      <ReactRecaptcha {...props} sitekey={siteKey} />
    </StyledContainer>
  );
};

export default Recaptcha;
