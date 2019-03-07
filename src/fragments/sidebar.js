import { graphql } from 'gatsby';

export const SidebarFragment = graphql`
  fragment SidebarFragment on Node {
    ...ContentCardBannerFragment
    ...CtaAssemblyFragment
    ...InlineCallout
    ...BannerTopicFragment
    ...RichTextFragment
    ...InlineCallout
  }
`;
