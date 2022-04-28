function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    var idadeNum = parseInt(idade.value)


    if (idadeNum >= 18) {
        alert('Você está apto para tirar sua CNH')
    }

    else if (idadeNum > 4) {
        alert('Você é menor de idade, por enquanto vá de bike')
    }

    else {
        alert('Melhor ir de velotrol')
    }






}
