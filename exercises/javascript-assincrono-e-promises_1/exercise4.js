const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
// setTimeout não recebe parâmetro por ser um delay e não umafunção em si
const sendMarsTemperature = () => {
  setTimeout(() => {
    const tempAtual = getMarsTemperature();
    const menssagem = `Mars temperature is: ${tempAtual} degree Celsius`;
    return console.log(menssagem);
  }, messageDelay());
}


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// FIZ POR CONTA PRÓPRIAAAAAAAA :D