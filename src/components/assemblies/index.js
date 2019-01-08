import React from 'react'
import PropTypes from 'prop-types'
// Components
import CTABanner from '../cta-banner'
import DownloadBanner from '../download-banner'
import ContentGrid from '../content-grid'
import Banner from '../banner'
import VideoEmbed from '../video'

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
      if (internal.type === 'ContentfulTopicContentGrid4')
        return <ContentGrid key={id} content={assembly} />
      if (internal.type === 'ContentfulTopicBanner')
        return <Banner key={id} banner={assembly} />
      if (internal.type === 'ContentfulTopicVideoEmbed')
        return <VideoEmbed key={id} data={assembly} />

      if (internal.type === 'ContentfulAssemblyDownloadBanner')
        return <DownloadBanner key={id} banner={assembly} />

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
