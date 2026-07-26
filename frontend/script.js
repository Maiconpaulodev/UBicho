const API = "https://ubicho.onrender.com/api/animals?populate=*";

async function carregarAnimais() {
  try {
    const resposta = await fetch(API);

    const dados = await resposta.json();

    const animais = dados.data;

    const container = document.getElementById("animais");

    container.innerHTML = "";

    animais.forEach((animal) => {
      const imagem = animal.foto
        ? `https://ubicho.onrender.com${animal.foto.url}`
        : "imagem-padrao.jpg";

      container.innerHTML += `


        <div class="card">


          <img 
            src="${imagem}" 
            width="250"
          >


          <h3>
            ${animal.nome}
          </h3>


          <p>
            ${animal.especie}
          </p>


          <p>
            ${animal.cidade}
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
