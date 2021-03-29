const newEmployees = (funcionario) => {
  const employees = {
    id1: funcionario('Pedro Guerra'),
    id2: funcionario('Luiza Drumond'), 
    id3: funcionario('Carla Paiva') 
  }
  return employees;
};

const funcionario = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@betrybe.com`};
}

console.log(newEmployees(funcionario));
