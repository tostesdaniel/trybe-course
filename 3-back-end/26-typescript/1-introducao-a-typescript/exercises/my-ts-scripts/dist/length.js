var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
var convert = function (value, baseUnit, newUnit) {
    var fromIndex = units.indexOf(baseUnit);
    var toIndex = units.indexOf(newUnit);
    var exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
};
