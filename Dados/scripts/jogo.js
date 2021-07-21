/**
 * Jogo de dados
 * @autor Dilson Campêlo
 */
var resultado
var numeroResult

function randomNumber(){
    var dado = document.getElementById('face')
    let numeros = Math.floor(Math.random()*6+1)
    switch (numeros){
        case 1: 
            resultado = `face1`
            numeroResult = 1
            break
        case 2:
            resultado = `face2`
            numeroResult = 2
            break
        case 3: 
            resultado = `face3`
            numeroResult = 3
            break
        case 4:
            resultado = `face4`
            numeroResult = 4
            break
        case 5:
            resultado = `face5`
            numeroResult = 5
            break
        case 6:
            resultado = `face6`
            numeroResult = 6
            break
        default:
            break;
    }
    dado.src = `imagens/${resultado}.png`
    win()
}
function win(){
    let palpite= document.getElementById('caixaPalpite')
    if(palpite.value== numeroResult){
        alert("Parabéns, você acertou!")
    }
}

