const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};

const { job, parents } = person;

// console.log(name, job, parents);

const [father, mother] = parents;
console.log(father, mother);

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 10);
  return { id, name, job, parents };
}

const Luke = createUser(person);
console.log(Luke);
