export const formatDate = date => {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();

  return `${y}-${(m + 1).toString().padStart(2, '0')}-${d
    .toString()
    .padStart(2, '0')}`;
};
