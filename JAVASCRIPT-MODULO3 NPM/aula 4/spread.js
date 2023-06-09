const names = ["Bruno", "Andreia", "Jonas", "Pablo"];

console.log(names);
console.log(...names);
console.log(...names[1]);

const namesCopy = names;

namesCopy.pop();
namesCopy.pop();
namesCopy.push("Juno");

console.log({ names, namesCopy });
