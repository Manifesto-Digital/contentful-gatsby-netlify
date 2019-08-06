import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowDown from '../../assets/svg/icons/chevron-down-solid.svg';
import { sendEvent } from '../../utils/analytics';

// Styles
import { Wrapper, Heading, HeadingButton, Content, ArrowSVG } from './styles';

function Accordion({ header, children, className, active, id, footer, order }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    const analyticsData = {
      event: 'accordionInteraction',
      accordionTitle: `${header}`,
      accordionPosition: `${order}`,
      accordionOpen: `${isOpen}`,
    };
    sendEvent(analyticsData);
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
      <Heading active={active} isOpen={isOpen}>
        <ArrowSVG src={ArrowDown} isOpen={isOpen} />

        <HeadingButton
          type="button"
          onClick={e => handleClick(e)}
          aria-controls={id}
          aria-expanded={isOpen}
          isOpen={isOpen}
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
  order: PropTypes.number,
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
