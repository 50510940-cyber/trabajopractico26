//Actividad 1
let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];
let p = document.querySelector('p')
let input = document.querySelector('input')
let boton1 = document.querySelector('#boton1')
let boton2 = document.querySelector('#boton2')
let boton3 = document.querySelector('#boton3')
let boton4 = document.querySelector('#boton4')
let boton5 = document.querySelector('#boton5')

boton1.onclick = function () {
    console.log(utiles)
    p.textContent = utiles
    
}
let primero = utiles[0]; 
let ultimo = utiles[utiles.length - 1]
console.log(primero)
console.log(ultimo)
console.log(utiles.length)

utiles.push("Mochila")
console.log(utiles)
utiles.unshift("Cartuchera")
console.log(utiles)
console.log(utiles.length) 

console.log('Elemento eliminado: '+utiles[utiles.length - 1])
utiles.pop()

console.log(utiles)

boton2.onclick = function () {
    utiles.unshift(input.value)
}
boton3.onclick = function () {
    utiles.shift ()
}

//Actividad 2
