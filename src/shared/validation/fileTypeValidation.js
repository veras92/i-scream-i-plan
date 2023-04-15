export const fileTypeValidation = (file, context) => {
  const isValid = ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type);
  if (!isValid) context.createError();
  return isValid;
};
