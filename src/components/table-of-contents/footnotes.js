import React from 'react';
import PropTypes from 'prop-types';
import { ReferenceList, FootNotesTitle } from './styles';

export const TableOfContentsFootNotes = ({ referenceList }) => (
  <>
    <FootNotesTitle>Footnotes</FootNotesTitle>
    <ReferenceList>
      {referenceList.map((reference, i) => (
        <li key={i}>
          <a
            id={`reference-${i + 1}`}
            href={`#source-${i + 1}`}
            title={reference}
          >
            {`[${i + 1}] `}
          </a>
          <p>{reference.replace(/[[\]']+/g, '')}</p>
        </li>
      ))}
    </ReferenceList>
  </>
);

TableOfContentsFootNotes.propTypes = {
  referenceList: PropTypes.array,
};

export default TableOfContentsFootNotes;
