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
import RichTextWithWrapper from '../rich-text/with-wrapper';
import TwoColumnTextAndImageBlock from '../two-column-text-and-image-block';
import CardsWithIcons from '../cards-with-icons';
import Map from '../google-map';
import Stats from '../stats';
import Finder from '../finder';
import PersonCollection from '../person/collection';
import Accordions from '../accordion/accordions';
import FullWidthImage from '../image/full-width-image';

const Assemblies = ({ assemblies, insideContainer }) => {
  if (!assemblies || assemblies.length === 0) return null;

  const AssembliesLoop = () =>
    assemblies.map(assembly => {
      // Make sure an id and name of component have been queried
      if (!assembly || !assembly.id || !assembly.internal) return null;
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
      if (internal.type === 'ContentfulComponentContentGrid4') {
        return <ContentGrid key={id} content={assembly} />;
      }

      if (internal.type === 'ContentfulComponentBanner') {
        return <Banner key={id} banner={assembly} />;
      }

      if (internal.type === 'ContentfulComponentDonationBanner') {
        return <DonationBanner key={id} banner={assembly} />;
      }

      if (internal.type === 'ContentfulComponentInlineCallout') {
        return (
          <InlineCallOut
            key={id}
            insideContainer={insideContainer}
            {...InlineCallOut.fromCMS(assembly)}
          >
            <RichText richText={assembly.content} />
          </InlineCallOut>
        );
      }

      if (internal.type === 'ContentfulComponentVideoEmbed') {
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

      if (internal.type === 'ContentfulComponentLinkBox') {
        return <LinkBox key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulComponentAdviceSearchBox') {
        return (
          <AdviceSearchBox
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulComponentRelatedAdvice') {
        return (
          <RelatedAdvice
            key={id}
            data={assembly}
            insideContainer={insideContainer}
          />
        );
      }

      if (internal.type === 'ContentfulComponentShareBlock') {
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

      if (internal.type === 'ContentfulAssemblyContentCardsBanner') {
        return <ContentCardBanner key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulComponentChallengeEventPerksList') {
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

      if (internal.type === 'ContentfulComponentTwoColumnTextAndImageBlock') {
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

      if (internal.type === 'ContentfulComponentGoogleMap') {
        return <Map key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulComponentStats') {
        return <Stats key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulComponentServicesFinder') {
        return (
          <Finder
            key={id}
            data={assembly}
            insideContainer={insideContainer}
            type="services"
          />
        );
      }

      if (internal.type === 'ContentfulComponentShopFinder') {
        return (
          <Finder
            key={id}
            data={assembly}
            insideContainer={insideContainer}
            type="shops"
          />
        );
      }

      if (internal.type === 'ContentfulAssemblyPersonCollection') {
        return <PersonCollection key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulComponentSimpleRichTextBlock') {
        return <RichTextWithWrapper key={id} richText={assembly.text} />;
      }

      if (internal.type === 'ContentfulAssemblyAccordions') {
        return <Accordions key={id} data={assembly} />;
      }

      if (internal.type === 'ContentfulComponentFullWidthImage') {
        return <FullWidthImage key={id} data={assembly} />;
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
