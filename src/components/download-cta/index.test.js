import React from 'react';
import { mountWithTheme, snapshotComponent } from 'test-helpers';
import DownloadCTA from './index';
import { formatFilesize } from '../../utils/filesize-formatting';
import {
  createFactory,
  createImage,
  createFile,
} from '../../utils/test-factories';

const createDownloadCTA = createFactory({
  buttonText: 'Button text',
  download: createFile(),
  filePreview: createImage(),
});

it('renders correctly', () => {
  const mockData = createDownloadCTA();
  snapshotComponent(<DownloadCTA cta={mockData} />);
});

it('displays the correct text and size', () => {
  const mockData = createDownloadCTA({
    buttonText: 'Mock button text',
    download: {
      file: {
        details: { size: 100000 },
        fileName: 'Mock file name',
        url: 'https://example.com/download.pdf',
      },
    },
  });

  const wrapper = mountWithTheme(<DownloadCTA cta={mockData} />);
  expect(wrapper.find('a').text()).toBe(
    `${mockData.buttonText}${formatFilesize(
      mockData.download.file.details.size
    )}`
  );
});

it('the download file src is correct', () => {
  const mockData = createDownloadCTA({
    download: {
      file: {
        details: { size: 100000 },
        fileName: 'Mock file name',
        url: 'https://example.com/download.pdf',
      },
    },
  });

  const wrapper = mountWithTheme(<DownloadCTA cta={mockData} />);
  expect(wrapper.find('a').prop('href')).toBe(mockData.download.file.url);
});

it('the download attribute is present', () => {
  const mockData = createDownloadCTA();
  const wrapper = mountWithTheme(<DownloadCTA cta={mockData} />);
  expect(wrapper.find('a').prop('download')).toEqual(true);
});
