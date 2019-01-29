import React from 'react';
import PropTypes from 'prop-types';
import { formatFilesize } from '../../utils/filesize-formatting';
import DownloadSVG from '../../assets/svg/icons/download-light.svg';
// Styles
import { Button, Filesize, ButtonText, ButtonSVG } from './styles';

const DownloadCTA = ({ cta }) => {
  const { buttonText, download } = cta;

  return (
    <Button href={download.file.url} download>
      <div>
        <ButtonText>{buttonText}</ButtonText>
        <Filesize>{formatFilesize(download.file.details.size)}</Filesize>
      </div>
      <ButtonSVG src={DownloadSVG} cacheGetRequests />
    </Button>
  );
};

DownloadCTA.propTypes = {
  cta: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    download: PropTypes.shape({
      file: PropTypes.shape({
        fileName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        details: PropTypes.shape({
          size: PropTypes.number.isRequired,
        }),
      }),
    }),
  }),
};

export default DownloadCTA;
