import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
import { consistentString } from '../../utils/content-formatting';
import { Wrapper, PrintButton } from './styles';

const ShareBlock = ({ data }) => {
  const { headerText, shareType } = data;
  const url = {
    Email: 'mailto:?&subject=Shelter&body=',
    WhatsApp: 'https://api.whatsapp.com/send?text=',
    Twitter: 'https://twitter.com/home?status=',
    Facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  };
  const shareUrl = url[shareType] || url.Email;

  return (
    <Wrapper>
      {headerText}
      <PrintButton
        onClick={() => window.print()}
        onKeyDown={event => {
          if (event.keycode === 13) window.print();
        }}
        type="button"
        tabIndex="0"
      >
        Print this article
      </PrintButton>
      <a href={`${shareUrl}${window.location.href}`}>
        <Icon icon={consistentString(shareType)} />
        {shareType === 'Email' ? 'Email' : 'Share'}
        {' this article'}
      </a>
    </Wrapper>
  );
};

ShareBlock.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    shareType: PropTypes.string.isRequired,
  }),
};

export default ShareBlock;
