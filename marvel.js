const timeStamp = '';
const apiKey = '2c9256c21b906dffbf2f1dcf8a0a6b0e';
const md5 = '9ec1c61428f9b0709f001aa40d7ee8a5';


fetch('https://gateway.marvel.com/v1/public/characters/1009351?ts=1&apikey=2c9256c21b906dffbf2f1dcf8a0a6b0e&hash=9ec1c61428f9b0709f001aa40d7ee8a5'
).then((response) =>{
     return response.json();
}).then((objetoJson)=>{
  

    const divHeroi = document.querySelector('.section-personagem');

    objetoJson.data.results.forEach(element =>{
       const scrImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHeroi = element.name;
        const img = document.createElement('img');
        const nome = document.createElement('h1')
        nome.className = 'nomeheroi'
        nameHeroi.className
        nome.innerHTML = nameHeroi;
        img.className = 'img';
        img.src = scrImage;
        divHeroi.appendChild(nome)
        divHeroi.appendChild(img)
    });
    console.log(objetoJson)
})

fetch('https://gateway.marvel.com/v1/public/characters/1009351/comics?ts=1&apikey=2c9256c21b906dffbf2f1dcf8a0a6b0e&hash=9ec1c61428f9b0709f001aa40d7ee8a5&limit=4'
).then((response) =>{
     return response.json();
}).then((objetoJson)=>{
  

    const divTipo = document.querySelector('.section-tipos');

    objetoJson.data.results.forEach(element =>{
       const scrImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHeroi = element.name;

        createDivTipo(scrImage, nameHeroi, divTipo);
    });
    console.log(objetoJson)
})


function createDivTipo(scrImage, nameHeroi, divCaixa){
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHeroi
    img.src = scrImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divCaixa.appendChild(divPai)
    img.className= "cards-gibi"
    divPai.className = "divPai"
    divPai.classList.add("personagem");
}

fetch('https://gateway.marvel.com/v1/public/characters/1009351?ts=1&apikey=2c9256c21b906dffbf2f1dcf8a0a6b0e&hash=9ec1c61428f9b0709f001aa40d7ee8a5'
).then((response) =>{
     return response.json();
}).then((objetoJson)=>{
  
  const divHistoria = document.querySelector('.section-historia');

  objetoJson.data.results.forEach(element =>{
     const historyHeroi = element.description
      const nameHeroi = element.name;
      const historia = document.createElement('h3');
      historia.className = 'historiaheroi'
      historia.innerHTML = historyHeroi;
      divHistoria.appendChild(historia)
  });
  console.log(objetoJson)
})