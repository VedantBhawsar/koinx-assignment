export function formatToUSD(number: number) {
  if (isNaN(number)) {
    return "Invalid input";
  }
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    roundingMode: "trunc",
  });
}
