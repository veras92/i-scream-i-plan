export const setFileUrl = (file, cbSetFileUrl) => {
  if (!file) return cbSetFileUrl(null);
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    cbSetFileUrl(fileReader.result);
  };
};
