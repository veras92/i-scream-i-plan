export const formatTimeOnInput = string => {
  return string.padStart(5, '0').split('-').join(':');
};

export const formatTimeOnOutput = string => {
  const transformedString = string.split(':').join('-');
  return transformedString.charAt(0) === '0'
    ? transformedString.substring(1)
    : transformedString;
};
