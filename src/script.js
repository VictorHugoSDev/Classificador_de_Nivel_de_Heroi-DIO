let nome = prompt("Qual o nome do seu herói");
let exp = parseInt(prompt("Qual a exp do seu herói"));
let nivel;
let cor;

if (exp < 1000) {
    nivel = "Ferro";
    cor = "gray";
} else if (exp >= 1001 && exp <= 2000) {
    nivel = "Bronze";
    cor = "saddlebrown";
} else if (exp >= 2001 && exp <= 5000) {
    nivel = "Prata";
    cor = "silver";
} else if (exp >= 5001 && exp <= 7000) {
    nivel = "Ouro";
    cor = "gold";
} else if (exp >= 7001 && exp <= 8000) {
    nivel = "Platina";
    cor = "lightblue";
} else if (exp >= 8001 && exp <= 9000) {
    nivel = "Ascendente";
    cor = "#32CD32";
} else if (exp >= 9001 && exp <= 10000) {
    nivel = "Imortal";
    cor = "#DAA520";
} else {
    nivel = "Radiante";
    cor = "#FF6347";
}

document.querySelector('#header').innerHTML = `O Herói de nome ${nome} está no nível de <span style="color:${cor}; text-decoration: underline;;">${nivel}</span>`;
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
