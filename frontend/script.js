const API = "http://localhost:1337/api/animals?populate=*";

async function carregarAnimais() {
  try {
    const resposta = await fetch(API);

    const dados = await resposta.json();

    console.log(dados);

    const animais = dados.data;

    const container = document.getElementById("animais");

    
animais.forEach((animal) => {
  const imagem = `http://localhost:1337${animal.foto.url}`;

  container.innerHTML += `
    <div class="card">

      <img src="${imagem}" alt="${animal.nome}">

      <h3>${animal.nome}</h3>

      <p><strong>Espécie:</strong> ${animal.especie}</p>

      <p><strong>Raça:</strong> ${animal.raca}</p>

      <p><strong>Idade:</strong> ${animal.idade}</p>

      <p><strong>Cidade:</strong> ${animal.cidade}</p>

      <p>${animal.descricao}</p>

      <button>Tenho interesse</button>

    </div>
  `;
});

  } catch (erro) {
    console.log("Erro ao carregar animais:", erro);
  }
}

carregarAnimais();
