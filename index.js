const usuarios = [
  { id: 1, nome: "Ana", idade: 25, ativo: true, compras: [120, 35, 80] },
  { id: 2, nome: "Bruno", idade: 17, ativo: false, compras: [50] },
  { id: 3, nome: "Carlos", idade: 32, ativo: true, compras: [200, 150] },
  { id: 4, nome: "Daniela", idade: 28, ativo: true, compras: []}
];

const usuariosFiltro = usuarios.filter(usuario => {
  return usuario.idade >= 18 && usuario.ativo
})

const resultadoFinal = usuariosFiltro.map(usuario => {
  
  const somaCompras = usuario.compras.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0);

  return {
    id: usuario.id,
    nome: usuario.nome,  
    totalGasto: somaCompras
  };
});

resultadoFinal.sort((a, b) => {
  return b.totalGasto - a.totalGasto;
});

console.log(resultadoFinal);

