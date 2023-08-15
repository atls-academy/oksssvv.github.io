export const getGap = (index) =>
  ({
    0: { _: 104, standard: 214, wide: 356, ultra: 222 },
    1: { _: 49, standard: 56, wide: 356, ultra: 222 },
  }[index] || 110)
