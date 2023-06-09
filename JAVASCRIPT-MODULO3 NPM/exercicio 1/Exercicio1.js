const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(` Média aritimética simples: ${average(3, 7, 4, 3, 9)}`);

const mediaPonderada = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * weight,
    0
  );
  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0);
  return sum / weightSum;
};

console.log(
  `Média ponderada ${mediaPonderada(
    { number: 9, weight: 3 },
    { number: 4, weight: 1 }
  )}`
);

const median = (...numbers) => {
  const oderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(oderedNumbers.length / 2);
  if (oderedNumbers.length % 2 !== 0) {
    return oderedNumbers[middle];
  }

  const firstMiddle = oderedNumbers[middle - 1];
  const secundMedian = oderedNumbers[middle];
  return average(firstMiddle, secundMedian);
};
console.log(`Mediana ${median(2, 4, 3, 5, 10)}`);
console.log(`Mediana ${median(15, 8, 3, 6, 10)}`);
