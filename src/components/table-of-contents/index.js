import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RichText from '../rich-text';
import { Table, TableList, Block, BlockContent, BlockTitle } from './styles';
import { bracketsToLink } from '../../utils/rich-text-formatting/bracketsToLink';
import { bracketsToArray } from '../../utils/rich-text-formatting/bracketsToArray';
import InlineCallOut from '../inline-callout';

export const TableOfContent = ({ data, updateReferenceList }) => {
  const {
    systemName,
    applicableRegions,
    openingStatement,
    tableOfContents,
  } = data;

  const [contentWithReferences, createReferenceContent] = useState([]);

  const convertBracketsToLink = text => {
    const formattedContent = bracketsToLink(text);
    createReferenceContent(formattedContent);
  };

  const convertBracketsToArray = text => {
    const referenceArray = bracketsToArray(text);
    updateReferenceList(referenceArray);
  };

  useEffect(() => {
    convertBracketsToLink(tableOfContents);
    convertBracketsToArray(tableOfContents);
  }, [tableOfContents]);
  return (
    <>
      <h1>{systemName}</h1>
      {openingStatement && <RichText richText={openingStatement} />}
      {tableOfContents && (
        <Table>
          <h3>Contents</h3>
          <TableList>
            {tableOfContents.map((item, i) => (
              <li key={i}>
                <a href={`#title-${i}`} title={item.title} key={i}>
                  {item.title}
                </a>
              </li>
            ))}
          </TableList>
        </Table>
      )}
      <InlineCallOut borderColour="red" insideContainer>
        This content applies to <strong>{applicableRegions}</strong>
      </InlineCallOut>
      {tableOfContents && (
        <Block>
          {tableOfContents.map((item, i) => (
            <BlockContent key={i}>
              <BlockTitle id={`title-${i}`} key={i}>
                {item.title}
              </BlockTitle>
              {contentWithReferences[i] && (
                <RichText
                  richText={{
                    childContentfulRichText: {
                      html: contentWithReferences[i],
                    },
                  }}
                />
              )}
            </BlockContent>
          ))}
        </Block>
      )}
    </>
  );
};

TableOfContent.propTypes = {
  data: PropTypes.shape({
    systemName: PropTypes.isRequired,
    applicableRegions: PropTypes.string,
    openingStatement: PropTypes.object,
    content: PropTypes.object,
  }),
  updateReferenceList: PropTypes.func,
};

export default TableOfContent;
