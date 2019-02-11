import React from 'react';
import PropTypes from 'prop-types';
// Components
import Testimonials from '../testimonials';
import TwoColumnTextAndImageBlock from '../two-column-text-and-image-block';

const ChallengeEventAssemblies = ({ assemblies, insideContainer }) => {
  if (!assemblies || assemblies.length === 0) return null;

  const AssembliesLoop = () =>
    assemblies.map(assembly => {
      // Make sure an id and name of component have been queried
      if (!assembly.id || !assembly.internal) return null;
      const { id, internal } = assembly;

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

      return null;
    });

  return <AssembliesLoop />;
};

ChallengeEventAssemblies.propTypes = {
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

ChallengeEventAssemblies.defaultProps = {
  insideContainer: false,
};
export default ChallengeEventAssemblies;
