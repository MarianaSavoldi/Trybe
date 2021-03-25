const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// requisito 1
// const addNewKey = (object, key, value) => {
//   object[key] = value;
// };

// addNewKey(lesson2, 'turno', 'noite');

// requisito 2
// const listKeys = (object) =>  Object.keys(object);
// console.log(listKeys(lesson1));

// requisito 3
// const objLength = (object) =>  Object.keys(object).length;
// console.log(objLength(lesson1));

// requisito 4
const obejectValue = (object) => {
  const valores = Object.values(lesson1);
  console.log(valores);
}

obejectValue();

