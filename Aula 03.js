vendedor = prompt('Digite seu nome por gentileza: ', 'Digite seu nome aqui');
jan = prompt('Informe o valor das vendas de janeiro: ', 'Digite os valores aqui');
fev = prompt('Informe o valor das vendas de fevereiro: ', 'Digite os valores aqui');
mar = prompt('Informe o valor das vendas de março: ', 'Digite os valores aqui');

// Quando você entra com dados utilizando o comando prompt, esses valores são armazenados como string(texto), o comando parseFloat(); converte os valores para número decimal 

media = (parseFloat(jan) + parseFloat(fev) + parseFloat(mar)) / 3; 

console.log(`A média do vendedor ${vendedor} no primeiro trimestre de 2023 foi de ${media}.`);
alert(`Olá ${vendedor}, no primeiro trimestre de 2023 a sua média de vendas foi de : ${media}.`);