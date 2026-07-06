let b1 = document.querySelector('button')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')
let b4 = document.querySelector('#b4')
let p = document.querySelector('p')

b2.onclick = function(){
    p.style.backgroundColor = 'blue'
    //b1.style.color = 'white'
    //p.textContent = 'Kiwi es mi perrihijo y duerme tapado con su mamá'

}

b1.onclick = function(){
   //b1.style.backgroundColor = 'blue'
    //b1.style.color = 'blue'
   p.textContent = 'Mi perro es muy cuidado y duerme apadio abajo de las sabanas'

}
b3.onclick = function(){
    //p.style.backgroundColor = 'green'
    //b1.style.color = 'yellow'
   // p.textContent = 'kiwi se baña y se pone perfume porque es un perro elegante y refinado'
   p.style.color = 'green'

}
b4.onclick = function(){
    //b1.style.backgroundColor = 'nude'
    //p.textContent = 'En fin, kiwi es un bebé perruno.'
     p.style.fontFamily= 'impact'
}






