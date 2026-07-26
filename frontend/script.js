const API = "https://ubicho.onrender.com/api/animals?populate=*";

async function carregarAnimais() {
  const container = document.getElementById("animais");

  try {
    const resposta = await fetch(API);

    const dados = await resposta.json();

    container.innerHTML = "";

    dados.data.forEach((animal) => {
      let imagem;

      if (animal.foto) {
        imagem = `https://ubicho.onrender.com${animal.foto.url}`;
      } else {
        imagem = "https://via.placeholder.com/250x180?text=Sem+Foto";
      }

      container.innerHTML += `

      <div class="card">


        <img 
        src="${imagem}" 
        alt="${animal.nome}"
        width="250"
        height="180"
        style="object-fit:cover;border-radius:15px;"
        >


        <h3>
        ${animal.nome}
        </h3>


        <p>
        <strong>Espécie:</strong>
        ${animal.especie}
        </p>


        <p>
        <strong>Raça:</strong>
        ${animal.raca ?? "Não informado"}
        </p>


        <p>
        <strong>Cidade:</strong>
        ${animal.cidade ?? "Não informado"}
        </p>


        <p>
        ${animal.descricao ?? "Sem descrição"}
        </p>


        <button class="btn">
        Tenho interesse
        </button>


      </div>

      `;
    });
  } catch (erro) {
    console.log("Erro ao carregar animais:", erro);
  }
}

carregarAnimais();
