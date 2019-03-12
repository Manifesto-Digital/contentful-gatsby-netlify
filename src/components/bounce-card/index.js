import React from 'react';
import LinkHandler from '../link-handler';
import Image from '../image';
import { Wrapper } from './styles';
import ScotlandOnly from '../../images/scotland_only.png';

const BounceCard = () => (
  <Wrapper>
    <Image
      image={{
        file: {
          url: ScotlandOnly,
        },
        description: 'This content applies to Scotland only.',
      }}
      width={50}
      height={76}
    />
    <div>
      Housing laws differ between Scotland and England. {'\n'}This content
      applies to <strong>Scotland only.</strong>
      {'\n'}
      <LinkHandler externalUrl="https://england.shelter.org.uk/">
        Get advice if you're England
      </LinkHandler>
    </div>
  </Wrapper>
);

export default BounceCard;
