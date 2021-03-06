import React from 'react';
import PropTypes from 'prop-types';
import { FileDownload } from '../../prop-types';
import { formatFilesize } from '../../utils/filesize-formatting';
import { mimeTypeToString } from '../../utils/content-formatting';
import DownloadSVG from '../../assets/svg/icons/download-light.svg';
// Styles
import { Button, FileInfo, ButtonText, ButtonSVG } from './styles';

const DownloadCTA = ({ cta, className }) => {
  if (!cta) return null;
  const { buttonText, download } = cta;

  return (
    <Button
      className={`${className || ''} tracking-download`}
      href={download.file.url}
      data-tracking={mimeTypeToString(download.file.contentType)}
      download
    >
      <div>
        <ButtonText>{buttonText}</ButtonText>
        <FileInfo>{formatFilesize(download.file.details.size)}</FileInfo>
        {download.file.contentType && (
          <FileInfo>{mimeTypeToString(download.file.contentType)}</FileInfo>
        )}
      </div>
      <ButtonSVG src={DownloadSVG} cacheGetRequests />
    </Button>
  );
};

DownloadCTA.propTypes = {
  cta: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    download: PropTypes.shape({
      file: FileDownload,
    }),
  }),
  className: PropTypes.string,
};

export default DownloadCTA;
