import digits from "./digits";

const includesDigits = (text: string) => {
  let res = false;
  digits.forEach((d) => {
    if (text.includes(d)) {
      res = true;
      return res;
    }
  });
  return res;
};
export default includesDigits;
