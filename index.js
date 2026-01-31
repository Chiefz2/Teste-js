const usuarios = [
  { id: 1, nome: "Ana", idade: 25, ativo: true, compras: [120, 35, 80] },
  { id: 2, nome: "Bruno", idade: 17, ativo: false, compras: [50] },
  { id: 3, nome: "Carlos", idade: 32, ativo: true, compras: [200, 150] },
  { id: 4, nome: "Daniela", idade: 28, ativo: true, compras: [] }
];

const usuariosFiltro = usuarios.filter(usuario => {
  return usuario.idade >= 18 && usuario.ativo;
});

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

const express = require('express');
const app = express();

app.get('/posts', async (req, res) => {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const todosOsPosts = await resposta.json();
    
    const postsDoUsuario1 = todosOsPosts.filter(post => post.userId === 1);
    const cincoPrimeiros = postsDoUsuario1.slice(0, 5);
    
    res.json(cincoPrimeiros);
  } catch (erro) {
    res.status(500).send("Erro ao buscar os dados");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
