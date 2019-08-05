export const statsToArray = content => {
  const createStatObject = (title, subtitle, text) => {
    if (!text) return null;

    return {
      title,
      subtitle,
      text,
    };
  };

  const { stat1Title, stat1Subtitle, stat1Text } = content;
  const stat1 = createStatObject(stat1Title, stat1Subtitle, stat1Text);
  const { stat2Title, stat2Subtitle, stat2Text } = content;
  const stat2 = createStatObject(stat2Title, stat2Subtitle, stat2Text);
  const { stat3Title, stat3Subtitle, stat3Text } = content;
  const stat3 = createStatObject(stat3Title, stat3Subtitle, stat3Text);
  const { stat4Title, stat4Subtitle, stat4Text } = content;
  const stat4 = createStatObject(stat4Title, stat4Subtitle, stat4Text);

  // Remove any nulls as a failsafe
  return [stat1, stat2, stat3, stat4].filter(stat => stat);
};
