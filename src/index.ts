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

let listaProdutos: Array<Produto> = [];

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

function descadastrarProduto(codigo: number): Produto[] {
  listaProdutos = listaProdutos.filter((produto) => produto.codigo !== codigo);
  return listaProdutos;
}
descadastrarProduto(0);

console.log(listaProdutos);

function listarProdutos({
  tipo,
  precoMax,
  freteGratis,
}: {
  tipo?: string;
  precoMax?: number;
  freteGratis?: boolean;
}): string[] {
  return listaProdutos
    .filter((produto) => {
      if (tipo) return produto.tipo.toLowerCase() === tipo.toLowerCase();
      return produto;
    })
    .filter((produto) => {
      if (precoMax) return produto.preco <= precoMax;
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

console.log(
  "Lista Final com frete grátis: ",
  listarProdutos({ freteGratis: true })
);
console.log(
  "Lista Final sem frete grátis: ",
  listarProdutos({ freteGratis: false })
);
console.log("Lista Final sem param. frete grátis: ", listarProdutos({}));

// freteGratis === false || freteGratis === true
// ? produto.freteGratis === freteGratis
// : produto
