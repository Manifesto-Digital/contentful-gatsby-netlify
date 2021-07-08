import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import { Wrapper } from './styles';
import Table from './index';

const TableWrapper = ({ data, insideContainer }) => {
  if (!data) return null;

  const { table, tableHeader } = data;

  if (!table || !table.tableData) return null;
  return (
    <Wrapper>
      <Container padding={!insideContainer}>
        {tableHeader && <h2>{tableHeader}</h2>}
        <Table tableData={table.tableData} />
      </Container>
    </Wrapper>
  );
};

TableWrapper.propTypes = {
  data: PropTypes.shape({
    table: PropTypes.shape({
      tableData: PropTypes.array,
    }).isRequired,
    tableHeader: PropTypes.string,
  }).isRequired,
  insideContainer: PropTypes.bool,
};

TableWrapper.defaultProps = {
  insideContainer: false,
};
export default TableWrapper;
