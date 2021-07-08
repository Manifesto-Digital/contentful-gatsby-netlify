import React from 'react';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { shallow } from 'enzyme';
import { createFactory } from '../../utils/test-factories';
import TableWrapper from './table-wrapper';
import Table from '.';

const tableData = [
  [
    'City/town',
    'Number of homeless children  ',
    'Number of schools',
    'Equivalent number of homeless children per school',
  ],
  ['Luton', '2,549', '79', '32'],
  ['London', '88,410', '3,147', '28'],
  ['Brighton and Hove', '1,962', '90', '22'],
  ['Slough', '741', '55', '13'],
  ['Manchester', '1,872', '202', '9'],
];
// Default props
const createTableWrapper = createFactory({
  headerText: 'Test header text',
  table: {
    tableData,
  },
});

it('renders the table wrapper component correctly', () => {
  const mockData = createTableWrapper();
  snapshotComponent(<TableWrapper data={mockData} />);
});

it('renders the table component correctly', () => {
  snapshotComponent(<Table tableData={tableData} />);
});

it('renders the the table markup correctly', () => {
  const wrapper = mountWithTheme(<Table tableData={tableData} />);

  expect(wrapper.find('table')).toHaveLength(1);
  expect(wrapper.find('tbody')).toHaveLength(1);
  expect(wrapper.find('tr')).toHaveLength(tableData.length);
  // Check first row in table data are rendered as table header cells
  const firstRow = wrapper.find('tr').at(0);
  expect(firstRow.find('th')).toHaveLength(tableData[0].length);
});
