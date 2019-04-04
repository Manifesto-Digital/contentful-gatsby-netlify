import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../prop-types';
import { Table, TableList } from './styles';

const TableOfContent = ({ tableOfContents }) => {
  if (!tableOfContents) return null;

  return (
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
  );
};

TableOfContent.propTypes = {
  tableOfContents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      textContent: PropTypes.shape(richTextPropTypes),
    })
  ),
};

export default TableOfContent;
