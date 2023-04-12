export const getDefaultValues = arr =>
  arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.inputName]: '',
    }),
    {}
  );
