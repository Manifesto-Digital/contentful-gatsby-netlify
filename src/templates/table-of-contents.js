import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import RichText from '../components/rich-text';

const TableOfContents = ({ data }) => {
  const {
    systemName,
    applicableRegions,
    openingStatement,
    content,
  } = data.contentfulPageAssemblyTableOfContents;
  const [topLinkArray, createTopLinkArray] = useState('');
  const [bottomLinkArray, createBottomLinkArray] = useState('');
  const [formattedContent, formatContent] = useState('');

  const groomContent = (rawContent, tagName) => {
    // add the RichText content to a temp div so we can search through DOM elements
    const temp = document.createElement('div');
    temp.innerHTML = rawContent;

    // get the tags
    const tagsInContent = temp.getElementsByTagName('*');
    const linksArray = [];

    // For each matched tags, create an array of objects that link to our content
    Object.keys(tagsInContent).forEach((key, i) => {
      if (tagsInContent[key].tagName === tagName) {
        const tagId = `${tagName === 'H2' ? 'title-' : 'reference-'}${i}`;
        const link = {};
        link.href = `#${tagId}`;
        link.innerHTML = tagsInContent[key].innerHTML;
        linksArray.push(link);
        // give the href an ID to link to
        tagsInContent[key].id = tagId;
      }
    });

    formatContent(temp.innerHTML);

    if (tagName === 'H2') {
      createTopLinkArray(linksArray);
      groomContent(temp.innerHTML, 'U');
    } else {
      createBottomLinkArray(linksArray);
    }
  };

  useEffect(() => {
    groomContent(content.childContentfulRichText.html, 'H2');
  }, [content]);

  return (
    <Layout>
      <div>
        {topLinkArray &&
          topLinkArray.map((link, i) => (
            <a href={link.href} key={i}>
              {link.innerHTML}
            </a>
          ))}
        <h1>{systemName}</h1>
        <p>{applicableRegions}</p>
        <RichText richText={openingStatement} />
        {formattedContent && (
          <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
        )}
        {bottomLinkArray &&
          bottomLinkArray.map((link, i) => (
            <a href={link.href} key={i}>
              {link.innerHTML}
            </a>
          ))}
      </div>
    </Layout>
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

export const tabelOfContentsPageQuery = graphql`
  query tabelOfContentsPageQuery($slug: String!) {
    contentfulPageAssemblyTableOfContents(slug: { eq: $slug }) {
      internal {
        type
      }
      systemName
      applicableRegions
      openingStatement {
        childContentfulRichText {
          html
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
