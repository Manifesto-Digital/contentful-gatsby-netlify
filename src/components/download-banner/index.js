import React from 'react';
import PropTypes from 'prop-types';
// Components
import DownloadCTA from '../download-cta';
// Styles
import { Container } from '../styled/containers';
import { Banner, FileImage, Wrapper, FileDetails, Header } from './styles';

const DownloadBanner = ({ banner }) => {
  if (!banner) return null;

  const { headerText, removeMarginBottom, downloadCta } = banner;

  return (
    <Banner removeMarginBottom={removeMarginBottom}>
      <Container>
        <Wrapper>
          {downloadCta && downloadCta.filePreview && (
            <FileImage>
              <img
                src={`${downloadCta.filePreview.file.url}?w=500`}
                alt={downloadCta.filePreview.description}
              />
            </FileImage>
          )}
          <FileDetails>
            <Header>{headerText}</Header>
            <DownloadCTA cta={downloadCta} />
          </FileDetails>
        </Wrapper>
      </Container>
    </Banner>
  );
};

DownloadBanner.propTypes = {
  banner: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    downloadCta: PropTypes.shape({
      buttonText: PropTypes.string.isRequired,
      filePreview: PropTypes.shape({
        description: PropTypes.string.isRequired,
        file: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
    }),
    removeMarginBottom: PropTypes.bool,
  }),
};

export default DownloadBanner;
