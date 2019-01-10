import 'jest-styled-components';
import ReactModal from 'react-modal';

// This is to supress the warning below, since this does not matter for tests:
//
// Warning: react-modal: App element is not defined. Please use `Modal.setAppElement(el)`
// or set `appElement={el}`. This is needed so screen readers don't see maincontent when modal is opened.
// It is not recommended, but you can opt-out by setting `ariaHideApp={false}`.
ReactModal.setAppElement(document.createElement('div'));
