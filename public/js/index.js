"use strict";
//Cadastrar, listar, excluir
let codigoAtual = 0;
function cadastrarProduto(nome, preco, tipo, freteGratis, coresDisponiveis) {
    let novoProduto = {
        codigo: codigoAtual,
        nome,
        preco,
        tipo,
        quantidade: 0,
        freteGratis,
        coresDisponiveis,
    };
    codigoAtual++;
    return novoProduto;
}
// console.log(
//   cadastrarProduto("Pente", 10, "utensilio", true, [
//     "azul",
//     "verde",
//     "vermelho",
//   ])
// );
const listaProdutos = [];
listaProdutos.push(cadastrarProduto("Pente", 10, "utensilio", true, [
    "azul",
    "verde",
    "vermelho",
]));
listaProdutos.push(cadastrarProduto("Escova de Dente", 15, "Higiene Bucal", true, [
    "preta",
    "branca",
    "roxa",
]));
listaProdutos.push(cadastrarProduto("Cubo mágico", 20, "Brinquedo", false, []));
console.log(listaProdutos);
