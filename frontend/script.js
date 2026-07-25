const API = "http://localhost:1337/api/animals?populate=*";

async function carregarAnimais() {
  try {
    const resposta = await fetch(API);

    const dados = await resposta.json();

    const animais = dados.data;

    const container = document.getElementById("animais");

    animais.forEach((animal) => {
      const info = animal.attributes;

      container.innerHTML += `


      <div class="card">


        <h3>
          🐾 ${info.nome}
        </h3>


        <p>
          Espécie: ${info.especie}
        </p>


        <p>
          Cidade: ${info.cidade}
        </p>


        <p>
          ${info.descricao}
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
