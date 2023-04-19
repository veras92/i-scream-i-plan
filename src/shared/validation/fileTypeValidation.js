const validFileExtensions = {
  image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
};

export const isValidFileType = value => {
  if (typeof value === 'string' && value.includes('image')) return true;
  const fileName = value[0].name.toLowerCase();
  return validFileExtensions['image'].indexOf(fileName.split('.').pop()) > -1;
};
