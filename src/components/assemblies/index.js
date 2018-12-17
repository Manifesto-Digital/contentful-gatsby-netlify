import React from 'react'
import PropTypes from 'prop-types'
// Components
import CTABanner from '../cta-banner'
import Banner from '../banner'

const Assemblies = ({ assemblies }) => {
  if (!assemblies || assemblies.length === 0) return null

  const AssembliesLoop = () =>
    assemblies.map(assembly => {
      // Make sure an id and name of component have been queried
      if (!assembly.id || !assembly.internal) return null
      const { id, internal } = assembly

      // CTA
      if (internal.type === 'ContentfulAssemblyCta')
        return (
          <CTABanner
            key={id}
            headerText={assembly.ctaHeaderText}
            removeMarginBottom={assembly.removeMarginBottom}
            cta={assembly.cta[0]}
            bannerColour={assembly.bannerColour}
          />
        )
      if (internal.type === 'ContentfulTopicBanner')
        return <Banner key={id} banner={assembly} />

      return null
    })

  return (
    <>
      <AssembliesLoop />
    </>
  )
}

Assemblies.propTypes = {
  assemblies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      internal: PropTypes.shape({
        type: PropTypes.string.isRequired,
      }),
    })
  ),
}

export default Assemblies
