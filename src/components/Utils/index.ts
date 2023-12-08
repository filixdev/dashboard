export const priceColor = (price: number): string => {
  if (price > 0) return "green";
  if (price < 0) return "red";
  return "black";
};
