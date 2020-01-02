export const addZeroToOneDigit = (number: number) => {
  return number < 10 ? "0" + number : "" + number;
}