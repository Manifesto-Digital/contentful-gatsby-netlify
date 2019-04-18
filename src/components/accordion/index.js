import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowDown from '../../assets/svg/icons/chevron-down-light.svg';

import { Wrapper, Heading, HeadingButton, Content, ArrowSVG } from './styles';

function Accordion({ header, children, className, active, id, footer }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (!active) {
    return (
      <Wrapper active={active} className={className}>
        <Heading active={active}>{header}</Heading>
        {children}
      </Wrapper>
    );
  }
  return (
    <Wrapper active={active} className={className} footer={footer}>
      <Heading active={active}>
        <ArrowSVG src={ArrowDown} isOpen={isOpen} />

        <HeadingButton
          type="button"
          onClick={e => handleClick(e)}
          aria-controls={id}
          aria-expanded={isOpen}
        >
          {header}
        </HeadingButton>
      </Heading>
      <Content id={id} isOpen={isOpen} aria-hidden={!isOpen}>
        {children}
      </Content>
    </Wrapper>
  );
}
Accordion.propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
  header: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  footer: PropTypes.bool,
};
Accordion.defaultProps = {
  active: true,
  footer: false,
};

export default Accordion;
