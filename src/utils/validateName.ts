import digits from "./digits";
import includesDigits from "./includesDigits";

const validateName = (name: string) => {
  if (name.length < 3) return false;
  if (includesDigits(name)) return false;
  return true;
};
export default validateName;
