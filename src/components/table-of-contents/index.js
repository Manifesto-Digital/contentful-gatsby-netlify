import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../rich-text';
import {} from './styles';

const groomContent = content => {
  // Find h2 tags, give them an id, create an array to build links from
  const temp = document.createElement('div');
  temp.innerHTML = content;

  const tagsInContent = temp.getElementsByTagName('*');
  console.log(tagsInContent);

  // Find a tags, give them an index, create an array to build content from
};

const TableOfContents = ({ data }) => {
  const { systemName, applicableRegions, openingStatement, content } = data;
  return (
    <div>
      <h1>{systemName}</h1>
      <p>{applicableRegions}</p>
      <RichText richText={openingStatement} />
      {groomContent(content.childContentfulRichText.html)}
    </div>
  );
};

TableOfContents.propTypes = {
  data: PropTypes.shape({
    systemName: PropTypes.isRequired,
    applicableRegions: PropTypes.string,
    openingStatement: PropTypes.object,
    content: PropTypes.object,
  }),
};

export default TableOfContents;
