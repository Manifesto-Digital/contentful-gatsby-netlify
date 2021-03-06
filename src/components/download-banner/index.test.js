import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import DownloadBanner from './index';
import { Header } from './styles';
import {
  createFactory,
  createImage,
  createFile,
} from '../../utils/test-factories';

// Default props
export const createDownloadBanner = createFactory({
  headerText: 'mock header text',
  linkText: 'mock link text',
  downloadCta: {
    buttonText: 'Mock button text',
    filePreview: createImage(),
    download: createFile(),
  },
});

it('renders correctly', () => {
  const mockData = createDownloadBanner();
  snapshotComponent(<DownloadBanner banner={mockData} />);
});

it('displays the correct header text', () => {
  const mockData = createDownloadBanner({ headerText: 'Test header text' });
  const wrapper = shallow(<DownloadBanner banner={mockData} />);
  expect(wrapper.find(Header).text()).toBe(mockData.headerText);
});

it('displays the file preview image if provided', () => {
  const mockData = createDownloadBanner({
    downloadCta: {
      buttonText: 'Mock button text',
      filePreview: {
        description: 'Mock file description',
        file: {
          url:
            '//assets.ctfassets.net/6sxvmndnpn0s/6gDmPHZ04gCMMS4sOa0IEk/7c712c5e8e383bbafd61f2d9d570de4f/component_tree-pdf.pdf',
          fileName: 'component tree-pdf.pdf',
        },
      },
    },
  });

  const wrapper = shallow(<DownloadBanner banner={mockData} />);

  expect(wrapper.find('img')).toHaveLength(1);
});
