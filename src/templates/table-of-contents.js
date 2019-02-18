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
    tableOfContents,
  } = data.contentfulPageAssemblyTableOfContents;

  const [contentWithReferences, createReferenceContent] = useState([]);
  const [referenceList, updateReferenceList] = useState([]);

  const formatRawText = text => {
    const formattedContent = [];
    let count = 0;
    [...text].forEach(content => {
      const richText = content.textContent.childContentfulRichText.html;
      const formattedText = richText.replace(/[^[\]]+(?=])/g, function() {
        count += 1;
        return `<a href="#reference-${count}">${count}</a>`;
      });

      formattedContent.push(formattedText);
    });
    createReferenceContent(formattedContent);
  };

  const createReferences = text => {
    const referenceArray = [];
    [...text].forEach(content => {
      const richText = content.textContent.childContentfulRichText.html;
      const hasLink = richText.match(/[^[\]]+(?=])/g);
      referenceArray.push(...hasLink);
    });
    updateReferenceList(referenceArray);
  };

  useEffect(() => {
    formatRawText(tableOfContents);
    createReferences(tableOfContents);
  }, [tableOfContents]);

  return (
    <Layout>
      <div>
        <h1>{systemName}</h1>
        <p>{applicableRegions}</p>
        <RichText richText={openingStatement} />
        {tableOfContents &&
          tableOfContents.map((item, i) => (
            <a href={`#title-${i}`} title={item.title} key={i}>
              <h2>{item.title}</h2>
            </a>
          ))}

        {tableOfContents &&
          tableOfContents.map((item, i) => (
            <div key={i}>
              <h2 id={`title-${i}`} key={i}>
                {item.title}
              </h2>
              <RichText
                richText={{
                  childContentfulRichText: { html: contentWithReferences[i] },
                }}
              />
            </div>
          ))}

        {referenceList &&
          referenceList.map((reference, i) => (
            <div id={`reference-${i}`} key={i}>
              {reference}
            </div>
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
      tableOfContents {
        title
        textContent {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`;
