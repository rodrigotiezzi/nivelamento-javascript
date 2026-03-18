let veiculo = {
  marca: "Peugeot",
  modelo: "307",
  ano: 2008,
  disponivel: true
};
console.log(veiculo.marca);
console.log(veiculo.modelo);         
console.log(veiculo["ano"]);
console.log(veiculo["disponivel"]);    

// Adicionando nova propriedade:
veiculo.cor = "prata";
console.log(veiculo.cor);      