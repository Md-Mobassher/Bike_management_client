export const genders = ["Male", "Female", "Other"];

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const roles = ["Buyer", "Seller"];
export const roleOptions = roles.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const bikeSizes = ["Small", "Medium", "Large"];

export const bikeSizeOptions = bikeSizes.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const bikeGearTypes = [
  "Single-Speed",
  "Fixed Gear",
  "Internal Hub Gears",
  "Derailleur Gears",
  "Nexus Hub Gears",
  "Rohloff Speedhub",
  "Electronic Shifting",
  "Belt-Drive Systems",
];

export const bikeGearTypesOptions = bikeGearTypes.map((item) => ({
  value: item,
  label: item,
}));

export const bikeTypes = [
  "Mountain Bike",
  "Road Bike",
  "Hybrid Bike",
  "City Bike",
  "Cruiser Bike",
  "BMX Bike",
  "Touring Bike",
  "Electric Bike",
  "Folding Bike",
  "Gravel Bike",
  "Fat Bike",
  "Recumbent Bike",
];

export const bikeTypesOptions = bikeTypes.map((item) => ({
  value: item,
  label: item,
}));

export const bikeMaterials = [
  "Steel",
  "Aluminum",
  "Carbon Fiber",
  "Titanium",
  "Chromoly",
  "Bamboo",
  "Wood",
  "Alloy",
  "Magnesium",
];

export const bikeMaterialsOptions = bikeMaterials.map((item) => ({
  value: item,
  label: item,
}));

export const bikeSuspensionTypes = [
  "Rigid",
  "Hardtail",
  "Full Suspension",
  "Front Suspension",
  "Rear Suspension",
  "Dual Suspension",
  "Air Suspension",
  "Coil Suspension",
  "Hybrid Suspension",
];

export const bikeSuspensionTypesOptions = bikeSuspensionTypes.map((item) => ({
  value: item,
  label: item,
}));

export const bikeServiceNames = [
  "Basic Tune-Up",
  "Complete Overhaul",
  "Oil Change",
  "Brake Check",
  "Tire Replacement",
  "Suspension Service",
  "Chain Replacement",
  "Frame Alignment",
  "Wheel Bearing Greasing",
  "Electronic Shifting Calibration",
];

export const bikeServiceNamesOptions = bikeServiceNames.map((item) => ({
  value: item,
  label: item,
}));
