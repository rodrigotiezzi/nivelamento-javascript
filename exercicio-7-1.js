// Função tradicional:
function a(base, altura) {
    area = base * altura / 2
    return area
}
console.log(a(8,5));    

// Arrow Function equivalente:
area = base * altura / 2;
const aArrow = (base, altura) => area + "Arrow";

console.log(aArrow(8,5)); 
const bArrow = (nome, periodo) => "Boa " + periodo + ", " + nome + "!";
console.log(bArrow("Rodrigo","tarde")); 
