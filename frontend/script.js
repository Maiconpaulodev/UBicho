const API = "https://ubicho.onrender.com/api/animals?populate=*";

async function carregarAnimais() {
  const container = document.getElementById("animais");

  const resposta = await fetch(API);

  const dados = await resposta.json();

  console.log(dados.data);

  dados.data.forEach((animal) => {
    const imagem = animal.foto
      ? `https://ubicho.onrender.com${animal.foto.url}`
      : "imagem-padrao.jpg";

    console.log(imagem);

    container.innerHTML += `

      <div class="card">

        <img src="${imagem}" width="250">

        <h3>${animal.nome}</h3>

        <p>${animal.especie}</p>

      </div>

    `;
  });
}

carregarAnimais();
