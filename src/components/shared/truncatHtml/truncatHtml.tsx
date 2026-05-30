export const truncateHtml = (html: string, maxLength = 120) => {
  const text = html.replace(/<[^>]*>/g, "");

  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
