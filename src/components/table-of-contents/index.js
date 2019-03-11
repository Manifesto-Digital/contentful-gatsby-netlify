import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RichText from '../rich-text';
import {
  Table,
  TableList,
  Block,
  BlockContent,
  BlockTitle,
  OpeningStatement,
} from './styles';
import { bracketsToLink } from '../../utils/rich-text-formatting/bracketsToLink';
import { bracketsToArray } from '../../utils/rich-text-formatting/bracketsToArray';
import InlineCallOut from '../inline-callout';
import PageTitle from '../page-title';

export const TableOfContent = ({ data, updateReferenceList }) => {
  const { title, applicableRegions, bodyCopy, tableOfContents } = data;

  const [contentWithReferences, createReferenceContent] = useState([]);

  useEffect(() => {
    const convertBracketsToLink = text => {
      const formattedContent = bracketsToLink(text);
      createReferenceContent(formattedContent);
    };

    const convertBracketsToArray = text => {
      const referenceArray = bracketsToArray(text);
      updateReferenceList(referenceArray);
    };
    convertBracketsToLink(tableOfContents);
    convertBracketsToArray(tableOfContents);
  }, [tableOfContents, updateReferenceList]);

  return (
    <>
      <PageTitle>
        <h1>{title}</h1>
      </PageTitle>
      {bodyCopy && (
        <OpeningStatement>
          <RichText richText={bodyCopy} />
        </OpeningStatement>
      )}
      {tableOfContents && (
        <Table>
          <TableList>
            {tableOfContents.map((item, i) => (
              <li key={i}>
                <a href={`#title-${i}`} title={item.title}>
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
              <BlockTitle id={`title-${i}`}>{item.title}</BlockTitle>
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
