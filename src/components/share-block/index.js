import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import Icon from './icon';
import { consistentString } from '../../utils/content-formatting';
import { Wrapper, Inner, ShareLink } from './styles';
import { Container } from '../styled/containers';
import { sendEvent } from '../../utils/analytics';

const ShareBlock = ({ data, insideContainer }) => {
  if (!data) return null;

  const { headerText, shareType } = data;
  const url = {
    Print: 'printer',
    Email: 'mailto:?&subject=Shelter&body=',
    WhatsApp: 'https://api.whatsapp.com/send?text=',
    Twitter: 'https://twitter.com/home?status=',
    Facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  };

  const printAnalyticsEvent = () =>
    sendEvent({
      event: 'print',
    });

  return (
    <Container padding={!insideContainer}>
      {headerText && <h3>{headerText}</h3>}
      <Wrapper>
        {shareType &&
          shareType.map((type, i) => (
            <Fragment key={i}>
              {type === 'Print' && (
                <Inner>
                  <ShareLink
                    as="button"
                    onClick={() => {
                      window.print();
                      printAnalyticsEvent();
                    }}
                    onKeyDown={event => {
                      if (event.keycode === 13) {
                        window.print();
                        printAnalyticsEvent();
                      }
                    }}
                    type="button"
                    tabIndex="0"
                  >
                    <Icon icon="print" />
                    Print this article
                  </ShareLink>
                </Inner>
              )}
              {url[type] && type !== 'Print' && (
                <Inner>
                  <Location>
                    {({ location }) => (
                      <ShareLink
                        href={`${url[type]}${location.href}`}
                        target="_blank"
                        rel="noopener"
                        className="tracking-share"
                        data-tracking={type}
                      >
                        <Icon icon={consistentString(type)} />
                        {type === 'Email' ? 'Email' : 'Share'}
                        {' this article'}
                      </ShareLink>
                    )}
                  </Location>
                </Inner>
              )}
            </Fragment>
          ))}
      </Wrapper>
    </Container>
  );
};

ShareBlock.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    shareType: PropTypes.array.isRequired,
  }),
  insideContainer: PropTypes.bool,
};

ShareBlock.defaultProps = {
  insideContainer: false,
};
export default ShareBlock;
