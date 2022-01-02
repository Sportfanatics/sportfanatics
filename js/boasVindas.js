function boasVindas() {
    
    let date = new Date()
    let hours = date.getHours()

    let mensagem = document.getElementById('mensagemBoasVindas')

    if (hours >= 0 && hours <= 5) {

        mensagem.innerText = "Boa Madrugada"
        
    } else if (hours >= 6 && hours <= 12) {

        mensagem.innerText = "Bom Dia"
        
    } else if (hours >= 13 && hours <= 17) {
        
        mensagem.innerText = "Boa Tarde"

    } else if (hours >= 18 && hours <= 23) {
        
        mensagem.innerText = "Boa Noite"

    }

}

function closeBoasVinaas() {
    
    let divBoasVindas = document.getElementById('boasVindas')

    divBoasVindas.classList.add("close")

}
