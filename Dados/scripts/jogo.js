/**
 * Jogo de dados
 * @autor Dilson Campêlo
 */
function randomNumber(){
    var dado = document.getElementById('face')
    var numeros = Math.floor(Math.random()*6+1)
    switch (numeros){
        case 1: 
            dado.src = 'imagens/face1.png'
            break
        case 2:
            dado.src = 'imagens/face2.png'
            break
        case 3: 
            dado.src = 'imagens/face3.png'
            break
        case 4:
            dado.src = 'imagens/face4.png'
            break
        case 5:
            dado.src = 'imagens/face5.png'
            break
        case 6:
            dado.src = 'imagens/face6.png'
            break
        default:
            break;
    }
}


