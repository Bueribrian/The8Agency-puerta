let puerta = document.querySelector('#abrirPuerta')
let message = document.querySelector('#message')

document.addEventListener('DOMContentLoaded', function() {
    puerta.addEventListener('click', ()=>{
            message.innerHTML = "Abriendo puerta..."
              fetch('http://192.168.1.2/puerta/abrir.php',{method:'POST'})
              .then(()=>{
                message.innerHTML = "Puerta abierta."
                setTimeout(()=>message.innerHTML = "",5000)
            })
    });
})
