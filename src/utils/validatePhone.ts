const validatePhone = (phone: string) => {
  if (phone.length < 10) return false;
  return true;
};
export default validatePhone;
