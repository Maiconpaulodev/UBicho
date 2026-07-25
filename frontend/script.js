const API = "http://localhost:1337/api/animals?populate=*";

async function carregarAnimais() {
  try {
    const resposta = await fetch(API);

    const dados = await resposta.json();

    const animais = dados.data;

    const container = document.getElementById("animais");

    animais.forEach((animal) => {
      container.innerHTML += `

      <div class="card">

        <h3>
          🐱 ${animal.nome}
        </h3>

        <p>
          Espécie: ${animal.especie}
        </p>

        <p>
          Cidade: ${animal.cidade}
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
  } catch (error) {
    console.log("Erro ao carregar animais", error);
  }
}

carregarAnimais();
