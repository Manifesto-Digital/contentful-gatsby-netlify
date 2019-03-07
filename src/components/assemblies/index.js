import React from 'react';
import PropTypes from 'prop-types';
// Components
import CTABanner from '../cta-banner';
import DownloadBanner from '../download-banner';
import ContentGrid from '../content-grid';
import Banner from '../banner';
import AdviceSearchBox from '../advice-search-box';
import ShareBlock from '../share-block';
import InlineCallOut from '../inline-callout';
import LinkBox from '../link-box';
import RelatedAdvice from '../related-advice';
import VideoEmbed from '../video';
import DonationBanner from '../donation-banner';
import Form from '../form';
import ContentCardBanner from '../content-card-banner';
import Perks from '../perks';
import Testimonials from '../testimonials';
import RichText from '../rich-text';
import TwoColumnTextAndImageBlock from '../two-column-text-and-image-block';
import CardsWithIcons from '../cards-with-icons';
import Map from '../google-map';
import PersonCollection from '../person/collection';

const Assemblies = ({ assemblies, insideContainer }) => {
  if (!assemblies || assemblies.length === 0) return null;

  const AssembliesLoop = () =>
    assemblies.map(assembly => {
      // Make sure an id and name of component have been queried
      if (!assembly.id || !assembly.internal) return null;
      const { id, internal } = assembly;

      // CTA
      if (internal.type === 'ContentfulAssemblyCta') {
        return (
          <CTABanner
            key={id}
            headerText={assembly.ctaHeaderText}
            removeMarginBottom={assembly.removeMarginBottom}
            cta={assembly.cta[0]}
            bannerColour={assembly.bannerColour}
          />
        );
      }
      if (internal.type === 'ContentfulTopicContentGrid4') {
        return <ContentGrid key={id} content={assembly} />;
      }

      if (internal.type === 'ContentfulTopicBanner') {
        return <Banner key={id} banner={assembly} />;
      }

      if (internal.type === 'ContentfulTopicDonationBanner') {
        return <DonationBanner key={id} banner={assembly} />;
      }

      if (internal.type === 'ContentfulTopicInlineCallout') {
        return (
          <InlineCallOut key={id} insideContainer={insideContainer}>
            <RichText richText={assembly.content} />
          </InlineCallOut>
        );
      }

      if (internal.type === 'ContentfulTopicVideoEmbed') {
        return (
          <VideoEmbed
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulAssemblyDownloadBanner') {
        return <DownloadBanner key={id} banner={assembly} />;
      }

      if (internal.type === 'ContentfulTopicLinkBox') {
        return <LinkBox key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulTopicAdviceSearchBox') {
        return (
          <AdviceSearchBox
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulTopicRelatedAdvice') {
        return (
          <RelatedAdvice
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulTopicShareBlock') {
        return (
          <ShareBlock
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulAssemblyForm') {
        return (
          <Form key={id} data={assembly}>
            Form
          </Form>
        );
      }
      if (internal.type === 'ContentfulTopicContentCardsBanner') {
        return <ContentCardBanner key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulTopicChallengeEventPerksList') {
        return (
          <Perks key={id} data={assembly} insideContainer={insideContainer} />
        );
      }

      if (internal.type === 'ContentfulAssemblyTestimonials') {
        return (
          <Testimonials
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulTopicTwoColumnTextAndImageBlock') {
        return <TwoColumnTextAndImageBlock key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulAssemblyCardsWithIcon') {
        return (
          <CardsWithIcons
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulTopicGoogleMap') {
        return <Map key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulAssemblyPersonCollection') {
        return <PersonCollection key={id} data={assembly} />;
      }

      return null;
    });

  return <AssembliesLoop />;
};

Assemblies.propTypes = {
  assemblies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      internal: PropTypes.shape({
        type: PropTypes.string.isRequired,
      }),
    })
  ),
  insideContainer: PropTypes.bool,
};

Assemblies.defaultProps = {
  insideContainer: false,
};
export default Assemblies;
