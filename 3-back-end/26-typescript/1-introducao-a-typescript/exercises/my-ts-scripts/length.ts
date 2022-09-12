const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (value: number, baseUnit: string, newUnit: string): number => {
  const fromIndex = units.indexOf(baseUnit);
  const toIndex = units.indexOf(newUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
};
