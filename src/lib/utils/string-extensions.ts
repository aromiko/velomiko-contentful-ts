// Utility function to convert only the starting character to lowercase
export const toLowerStartChar = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
};

// Utility function to convert the whole string to camelCase
export const toCamelCase = (str: string): string => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+|[^a-zA-Z0-9]/g, "");
};
