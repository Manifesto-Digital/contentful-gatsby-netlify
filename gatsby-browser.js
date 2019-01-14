/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import ReactModal from 'react-modal';

export function onClientEntry() {
  ReactModal.setAppElement('#___gatsby');
}
