export const genders = ["Male", "Female", "Other"];
export const roles = ["Buyer", "Seller"];

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const roleOptions = roles.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
