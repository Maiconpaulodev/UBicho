const API = "http://localhost:3000";


const lista = document.getElementById("listaAnuncios");

const nomeEmpresa = document.getElementById("nomeEmpresa");


const empresaId = 1; // depois vem do login



async function carregarAnuncios(){


    const resposta = await fetch(
        `${API}/empresas/${empresaId}/anuncios`
    );


    const anuncios = await resposta.json();



    lista.innerHTML = "";



    anuncios.forEach(anuncio => {


        lista.innerHTML += `

        <div class="anuncio">


            <img src="${anuncio.imagem}" width="150">


            <h3>
            ${anuncio.titulo}
            </h3>


            <p>
            ${anuncio.descricao}
            </p>


        </div>

        `;


    });


}



nomeEmpresa.innerHTML = 
"Empresa: Pet Feliz";


carregarAnuncios();