export const absoluteCenter = () => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const removeListStyles = `
  list-style-type: none;
  padding: 0;

  > li {
    margin: 0;
  }
`;
