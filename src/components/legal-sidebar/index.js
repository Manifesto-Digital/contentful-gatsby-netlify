import React from 'react';
import PropTypes from 'prop-types';
import PaddedBox from '../padded-box';
import LinkHandler from '../link-handler';

const LegalSideBar = ({ data }) => {
  const { sideBarLinks } = data;
  if (!sideBarLinks || sideBarLinks.length) return;

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
  data: PropTypes.shape({
    sideBarLinks: PropTypes.array.isRequired,
  }),
};

export default LegalSideBar;
