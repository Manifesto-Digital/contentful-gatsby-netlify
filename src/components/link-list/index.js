import React from 'react';
import PropTypes from 'prop-types';
import LinkHandler from '../link-handler';
import { Container } from '../styled/containers';
import { mimeTypeToString } from '../../utils/content-formatting';
import { formatFilesize } from '../../utils/filesize-formatting';
import {
  Wrapper,
  UnorderedList,
  DownloadLink,
  FileInfo,
  DownloadSVG,
} from './styles';
import downloadSVG from '../../assets/svg/icons/download-light.svg';

const LinkList = ({
  links,
  headerText,
  insideContainer,
  removeBottomMargin,
  downloads,
}) => (
  <Wrapper removeBottomMargin={removeBottomMargin}>
    <Container padding={!insideContainer}>
      {headerText && <h2>{headerText}</h2>}
      <UnorderedList>
        {links.map((link, i) => (
          <li key={i}>
            {downloads ? (
              <>
                <DownloadLink href={link.file.url}>
                  <DownloadSVG src={downloadSVG} />
                  {link.title}
                </DownloadLink>
                <FileInfo>
                  ({mimeTypeToString(link.file.contentType)},{' '}
                  {formatFilesize(link.file.details.size)})
                </FileInfo>
              </>
            ) : (
              <LinkHandler link={link}>{link.title}</LinkHandler>
            )}
          </li>
        ))}
      </UnorderedList>
    </Container>
  </Wrapper>
);

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerText: PropTypes.string,
  insideContainer: PropTypes.bool,
  removeBottomMargin: PropTypes.bool,
  downloads: PropTypes.bool,
};

LinkList.defaultProps = {
  insideContainer: false,
};

export default LinkList;
