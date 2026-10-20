let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];
let p = document.querySelector('p')
boton1.onclick = function () {
    console.log(utiles)
    p.textContent = utiles
    p.textContent = p.textContent + primero
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