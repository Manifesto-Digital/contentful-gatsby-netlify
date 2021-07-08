import React from 'react';
import PropTypes from 'prop-types';
import { Td } from './styles';

const Table = ({ tableData }) => (
  <table>
    <tbody>
      {tableData.map((row, rowI) => (
        <tr key={rowI}>
          {row && row.map((cell, cellI) =>
            rowI === 0 ? (
              <Td key={cellI} as="th">
                {cell}
              </Td>
            ) : (
              <Td key={cellI}>{cell}</Td>
            )
          )}
        </tr>
      ))}
    </tbody>
  </table>
);
Table.propTypes = {
  tableData: PropTypes.array,
};

export default Table;
