function verificar(num1, num2) {

    let resultado
    if (num1>num2) {
        resultado = num1
    } else {
        resultado = num2
    }
    return resultado
}

function menor(num1, num2) {

    let resultado
    if (num1<num2) {
        resultado = num1
    } else {
        resultado = num2
    }
    return resultado
}
function igual(num1, num2) {

    let resultado
    if (num1==num2) {
        resultado = 'iguales'
    } else {
        resultado = 'diferentes'
    }
    return resultado
}
let p1 = document.querySelector("#p1")
let botonverificar = document.querySelector("#verificar")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")

botonverificar.onclick = function () {
    
    p1.textContent = verificar(Number(input1.value), Number(input2.value))
}
 
