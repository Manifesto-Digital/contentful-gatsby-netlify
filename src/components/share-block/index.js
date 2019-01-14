import React from 'react';
import Icon from './icon';
import { Wrapper, Inner, ShareLink } from './styles';

const ShareBlock = () => (
  <Wrapper>
    <Inner>
      <ShareLink
        as="button"
        onClick={() => window.print()}
        onKeyDown={event => {
          if (event.keycode === 13) window.print();
        }}
        type="button"
        tabIndex="0"
      >
        <Icon icon="print" />
        Print this article
      </ShareLink>
    </Inner>
    <Inner>
      <ShareLink
        href="mailto:?&subject=Shelter&body="
        target="_blank"
        rel="noopener"
      >
        <Icon icon="email" />
        {'Email this article'}
      </ShareLink>
    </Inner>
  </Wrapper>
);

export default ShareBlock;
