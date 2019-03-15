import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import RichText from './index';
import { createFactory } from '../../utils/test-factories';

// Default props
export const createRichText = createFactory({
  childContentfulRichText: {
    html:
      '<h3>Face-to-face services</h3><p>Our advice and support services across the UK give people <b>one-to-one, personalised help</b> with all of their housing issues.</p>',
  },
});

it('renders correctly', () => {
  const mockData = createRichText();
  snapshotComponent(<RichText richText={mockData} />);
});

it('only renders items that have content', () => {
  const mockData = createRichText({
    childContentfulRichText: {
      html: '<p></p>',
    },
  });

  const wrapper = shallow(<RichText richText={mockData} />);
  expect(wrapper.getElement()).toBe(null);
});
