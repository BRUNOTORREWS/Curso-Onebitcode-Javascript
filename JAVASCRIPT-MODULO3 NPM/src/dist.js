"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log(" M\xE9dia aritim\xE9tica simples: ".concat(average(3, 7, 4, 3, 9)));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * weight;
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    return accum + entry.weight;
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia ponderada ".concat(mediaPonderada({
  number: 9,
  weight: 3
}, {
  number: 4,
  weight: 1
})));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var oderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(oderedNumbers.length / 2);
  if (oderedNumbers.length % 2 !== 0) {
    return oderedNumbers[middle];
  }
  var firstMiddle = oderedNumbers[middle - 1];
  var secundMedian = oderedNumbers[middle];
  return average(firstMiddle, secundMedian);
};
console.log("Mediana ".concat(median(2, 4, 3, 5, 10)));
console.log("Mediana ".concat(median(15, 8, 3, 6, 10)));
