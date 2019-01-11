import React from 'react';
import Layout from '../components/layout';
import DonateHero from '../components/donate-hero';

const ModalTest = () => (
  <Layout>
    <DonateHero
      single={{
        defaultAmount: 30,
        amounts: {
          10: {
            description: 'Donate £10 single',
            image: {
              srcSet:
                'https://england.shelter.org.uk/__data/assets/image/0009/1435419/Give-Once--u10.jpg 1000w',
              src:
                'https://england.shelter.org.uk/__data/assets/image/0009/1435419/Give-Once--u10.jpg',
              title: 'An image',
            },
          },
          20: {
            description: 'Donate £20 single',
            image: {
              srcSet:
                'https://england.shelter.org.uk/__data/assets/image/0007/1493503/Web_donate_homepage_16.9_20_2.jpg 1000w',
              src:
                'https://england.shelter.org.uk/__data/assets/image/0007/1493503/Web_donate_homepage_16.9_20_2.jpg',
              title: 'An image',
            },
          },
          30: {
            description: 'Donate £30 single',
            image: {
              srcSet:
                'https://england.shelter.org.uk/__data/assets/image/0005/1617143/2018_Christmas_homepage.jpg 1000w',
              src:
                'https://england.shelter.org.uk/__data/assets/image/0005/1617143/2018_Christmas_homepage.jpg',
              title: 'An image',
            },
          },
          50: {
            description: 'Donate £50 single',
            image: {
              srcSet:
                'https://england.shelter.org.uk/__data/assets/image/0003/1435422/Give-Once-u50_EDIT.jpg 1000w',
              src:
                'https://england.shelter.org.uk/__data/assets/image/0003/1435422/Give-Once-u50_EDIT.jpg',
              title: 'An image',
            },
          },
          80: {
            description: 'Donate £80 single',
            image: {
              srcSet:
                'https://england.shelter.org.uk/__data/assets/image/0020/1435421/Give-Once-u30.jpg 1000w',
              src:
                'https://england.shelter.org.uk/__data/assets/image/0020/1435421/Give-Once-u30.jpg',
              title: 'An image',
            },
          },
        },
      }}
      monthly={{
        defaultAmount: 80,
        amounts: {
          80: {
            description: 'Donate £80 single',
            image: {
              srcSet:
                'https://england.shelter.org.uk/__data/assets/image/0020/1435421/Give-Once-u30.jpg 1000w',
              src:
                'https://england.shelter.org.uk/__data/assets/image/0020/1435421/Give-Once-u30.jpg',
              title: 'An image',
            },
          },
        },
      }}
    />
  </Layout>
);

export default ModalTest;
