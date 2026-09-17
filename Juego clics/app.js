let boton = document.querySelector ('#boton')
let p = document.querySelector ('#texto')

let numero = 0
boton.onclick = function(){
    
    numero = numero + 1
    p.textContent = numero + ' corazones'

    if (numero >= 10 )
    {
        p.style.color = 'blue'
    }
    if (numero >= 20 )
    {
        p.style.color = 'pink'
    }
    if (numero >= 30 )
    {
        p.style.color = 'rgb(26, 184, 105)'
    }

    if (numero >= 40 )
    {
        p.style.color = 'orange'
    }
    
    if (numero >= 50 )
    {
        p.style.color = 'purple'
    }
    
    if (numero >= 60 )
    {
        p.style.color = 'violet'
    }
    if (numero >= 67 )
    {
        p.style.color = 'Brown'
    }
    
    if (numero >= 70 )
    {
        p.style.color = 'red'
    }
    
    if (numero >= 80 )
    {
        p.style.color = 'yellow'
    }
    
    if (numero >= 90 )
    {
        p.style.color = 'grey'
    }
    
    if (numero >= 100 )
    {
        p.style.color = 'light blue'
    }
    
}
