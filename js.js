btConsulta.addEventListener('click', consulta)
function consulta() { 
let callAuthor = txName.value;

fetch('https://dummyjson.com/quotes/')
.then(res => res.json())
.then(dummyjson=> {
    const listaCompleta = dummyjson.quotes;
    const listaFiltrada = listaCompleta.filter(obj => 
        obj.author.includes(callAuthor)
    )
    
    corpoLista.innerHTML=''
    listaFiltrada.forEach(obj => {
    let linha = document.createElement('corpoLista')
    linha.innerHTML = `
       Id: ${obj.id},
       Author: ${obj.author},

       Quote: ${obj.quote}
        `
        
        
        corpoLista.appendChild(linha)
            
   })
})
}
