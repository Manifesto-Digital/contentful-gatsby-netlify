export const formatDonationContent = content => {
  const createOptionObject = (amount, description, image) => ({
    amount,
    description,
    image,
  });

  // single
  const { singleAmount1, singleDescription1, singleImage1 } = content;
  const singleOption1 = createOptionObject(
    singleAmount1,
    singleDescription1,
    singleImage1
  );
  const { singleAmount2, singleDescription2, singleImage2 } = content;
  const singleOption2 = createOptionObject(
    singleAmount2,
    singleDescription2,
    singleImage2
  );
  const { singleAmount3, singleDescription3, singleImage3 } = content;
  const singleOption3 = createOptionObject(
    singleAmount3,
    singleDescription3,
    singleImage3
  );
  const { singleAmount4, singleDescription4, singleImage4 } = content;
  const singleOption4 = createOptionObject(
    singleAmount4,
    singleDescription4,
    singleImage4
  );

  const { singleAmount5, singleDescription5, singleImage5 } = content;
  const singleOption5 = createOptionObject(
    singleAmount5,
    singleDescription5,
    singleImage5
  );

  // monthly
  const { monthlyAmount1, monthlyDescription1, monthlyImage1 } = content;
  const monthlyOption1 = createOptionObject(
    monthlyAmount1,
    monthlyDescription1,
    monthlyImage1
  );
  const { monthlyAmount2, monthlyDescription2, monthlyImage2 } = content;
  const monthlyOption2 = createOptionObject(
    monthlyAmount2,
    monthlyDescription2,
    monthlyImage2
  );
  const { monthlyAmount3, monthlyDescription3, monthlyImage3 } = content;
  const monthlyOption3 = createOptionObject(
    monthlyAmount3,
    monthlyDescription3,
    monthlyImage3
  );
  const { monthlyAmount4, monthlyDescription4, monthlyImage4 } = content;
  const monthlyOption4 = createOptionObject(
    monthlyAmount4,
    monthlyDescription4,
    monthlyImage4
  );
  return {
    single: [
      singleOption1,
      singleOption2,
      singleOption3,
      singleOption4,
      singleOption5,
    ],
    monthly: [monthlyOption1, monthlyOption2, monthlyOption3, monthlyOption4],
  };
};
