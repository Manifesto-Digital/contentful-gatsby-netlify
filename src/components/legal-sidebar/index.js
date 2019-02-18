import React from 'react';
import PropTypes from 'prop-types';
import PaddedBox from '../padded-box';
import LinkHandler from '../link-handler';

const LegalSideBar = ({ sideBarLinks }) => {
  if (!sideBarLinks) return;

  return (
    <PaddedBox>
      <h3>Resources</h3>
      {sideBarLinks.map((sideBarLink, key) => (
        <LinkHandler key={key} internalLink={sideBarLink}>
          {sideBarLink.title}
        </LinkHandler>
      ))}
    </PaddedBox>
  );
};

LegalSideBar.propTypes = {
  sideBarLinks: PropTypes.array.isRequired,
};

export default LegalSideBar;
