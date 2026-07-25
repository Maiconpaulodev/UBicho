const API = "https://SEU-STRAPI.com/api/animais";

async function carregarAnimais() {
  try {
    const resposta = await fetch(API);

    const dados = await resposta.json();

    const animais = dados.data;

    const container = document.getElementById("animais");

    animais.forEach((animal) => {
      container.innerHTML += `


<div class="card">


<img src="${animal.imagem}">


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
