//Cadastrar, listar, excluir

type Produto = {
  codigo: number;
  nome: string;
  descricao?: string;
  preco: number;
  tipo: string;
  quantidade: number;
  freteGratis: boolean;
  coresDisponiveis: Array<string>;
};

let codigoAtual: number = 0;

function cadastrarProduto(
  nome: string,
  preco: number,
  tipo: string,
  freteGratis: boolean,
  coresDisponiveis: Array<string>
): Produto {
  let novoProduto: Produto = {
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

const listaProdutos: Array<Produto> = [];

listaProdutos.push(
  cadastrarProduto("Pente", 10, "utensilio", true, [
    "azul",
    "verde",
    "vermelho",
  ])
);
listaProdutos.push(
  cadastrarProduto("Escova de Dente", 15, "Higiene Bucal", true, [
    "preta",
    "branca",
    "roxa",
  ])
);

listaProdutos.push(cadastrarProduto("Cubo mágico", 20, "Brinquedo", false, []));

console.log(listaProdutos);
