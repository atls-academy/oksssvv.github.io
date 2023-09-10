export const getWidthCategory = (index) =>
  ({
    0: { _: 80, standard: 104, ultra: 148 },
    1: { _: 87, standard: 112, ultra: 160 },
  }[index] || 180)
