var nome = prompt('Olá, para continuarmos informe seu nome', 'Digite seu nome');
if (nome === 'Digite seu nome') {
    alert('Por favor digite seu nome para continuarmos');
} else {
    var idade = prompt('Agora informe sua idade', 'Digite sua idade');
    if (idade === ' Digite sua idade') {
        alert('Por favor digite uma idade válida');
    } else {
        console.log(`O nome do cliente é ${nome} ele tem ${idade} anos`);
        alert(`Seja bem vindo(a) ${nome}!!!!`);
    }
}