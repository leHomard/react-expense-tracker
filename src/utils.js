export const colorChooser = (type) => {
  if (type === "Inc") return "#2ecc71";
  else if (type === "Exp") return "#c0392b";
};

export const sign = (amount) => {
  return amount > 0 ? "+" : "-";
};
