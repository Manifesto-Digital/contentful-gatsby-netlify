const theme = {};

theme.palette = {
  primary: '#ea232d',
  donate: '#12b9bf',
  // Greys
  white: '#fff',
  offWhite: '#f7f7f7',
  grey10: '#e5e5e5',
  grey15: '#d9d9d9',
  grey25: '#bdbec0',
  grey40: '#999',
  grey45: '#8c8c8c',
  grey66: '#575757',
  grey80: '#5a5a5a',
  grey90: '#363839',
  black: '#212122',
  pureBlack: '#000000',
  // Blues
  sanMarinoBlue: '#4d63b5',
  lightBlue: '#e5edfd',
  royalBlue: '#0b0b89',
  shelterBlue: '#65cfe9',
  // Social sharing
  twitter: '#1da1f3',
  facebook: '#3b5998',
  whatsapp: '#25d366',
  // Feedback
  error: '#ea232d',
  errorLight: '#ffe7ec',
  success: '#62b33c',
  successLight: '#e6f8e7',

  overlay: 'rgba(43, 46, 56, 0.7)',
  overlayLight: 'rgba(255, 255, 255, 0.9)',
};

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  header: 'Helvetica Neue, Helvetica, arial,sans-serif',
  quote: 'Georgia, serif',
};

theme.sizes = {
  maxWidth: '1140px',
  container: '960px',
};

theme.borderradius = {
  small: '3px',
};

theme.headers = {
  h1: '2.35em',
  h2: '1.8em',
  h3: '1.35em',
  h4: '1.125em',
};

theme.fontsize = {
  tiny: '0.6rem', // 12px
  small: '0.775rem', // 14px
  standard: '1rem', // 16px
  larger: '1.4rem',
  hero: '4rem',
};

theme.fontWeight = {
  bold: '500',
};

theme.divider = {
  standard: `3px solid ${theme.palette.grey10}`,
};

theme.boxshadow = {
  standard: '0 2.5px 6px rgba(0,0,0,0.16), 0 2.5px 6px rgba(0,0,0,0.13);',
  small: '0 1.5px 4px rgba(0,0,0,0.12),0 1.5px 6px rgba(0,0,0,0.06)',
  menu: '-1px 0 14px rgba(0, 0, 0, 0.5);',
};

theme.spacing = {
  small: '10px',
  standard: '20px',
  medium: '30px',
  large: '40px',
  xl: '60px',
};
export default theme;
