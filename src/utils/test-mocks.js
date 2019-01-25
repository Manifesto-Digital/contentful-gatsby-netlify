// Whenever LinkHandler is used, when mounted in enzyme the rendered HTML
// includes a lowercase "l" in the gatsby Link tag. Which causes a warning
// This suppresses that warning for a whole test file
export const hidePascalCaseWarning = () => {
  beforeEach(() => {
    console.error = jest.fn(error => {
      if (
        !error.includes(
          'using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements'
        )
      ) {
        throw new Error(error);
      }
    });
  });

  afterEach(() => {
    console.error.mockClear();
  });
};
