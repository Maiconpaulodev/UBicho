const API = "https://ubicho.onrender.com/api/animals?populate=*";

async function carregarAnimais() {
  const container = document.getElementById("animais");

  try {
    const resposta = await fetch(API);

    const dados = await resposta.json();

    console.log(dados);

    container.innerHTML = "";

    dados.data.forEach((animal) => {
      const imagem = animal.foto
        ? `https://ubicho.onrender.com${animal.foto.url}`
        : "imagem-padrao.jpg";

      container.innerHTML += `

        <div class="card">

          <img 
            src="${imagem}" 
            alt="${animal.nome}"
            width="250"
          >


          <h3>${animal.nome}</h3>


          <p>
            <strong>Espécie:</strong>
            ${animal.especie}
          </p>


          <p>
            <strong>Raça:</strong>
            ${animal.raca}
          </p>


          <p>
            <strong>Cidade:</strong>
            ${animal.cidade}
          </p>


          <p>
            ${animal.descricao}
          </p>


          <button>
            Tenho interesse
          </button>


        </div>

      `;
    });
  } catch (erro) {
    console.error("Erro ao carregar animais:", erro);
  }
}

carregarAnimais();
