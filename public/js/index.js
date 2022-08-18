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
let listaProdutos = [];
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
function descadastrarProduto(codigo) {
    listaProdutos = listaProdutos.filter((produto) => produto.codigo !== codigo);
    return listaProdutos;
}
descadastrarProduto(0);
console.log(listaProdutos);
function listarProdutos({ tipo, precoMax, freteGratis, }) {
    return listaProdutos
        .filter((produto) => {
        if (tipo)
            return produto.tipo.toLowerCase() === tipo.toLowerCase();
        return produto;
    })
        .filter((produto) => {
        if (precoMax)
            return produto.preco <= precoMax;
        return produto;
    })
        .filter((produto) => {
        if (freteGratis === false || freteGratis === true)
            return produto.freteGratis === freteGratis;
        return produto;
    })
        .map((produto) => {
        return `Produto nome ${produto.nome}`;
    });
}
console.log("Lista Final com frete grátis: ", listarProdutos({ freteGratis: true }));
console.log("Lista Final sem frete grátis: ", listarProdutos({ freteGratis: false }));
console.log("Lista Final sem param. frete grátis: ", listarProdutos({}));
// freteGratis === false || freteGratis === true
// ? produto.freteGratis === freteGratis
// : produto
function produtoSelecionado(codigo) {
    return listaProdutos.find((produto) => codigo === produto.codigo);
}
console.log("Produto selecionado com codigo: ", produtoSelecionado(5));
