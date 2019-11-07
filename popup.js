
document.addEventListener('DOMContentLoaded', function() {
    let puerta = document.querySelector('#abrirPuerta')
    let message = document.querySelector('#message')
    let timeLapse = false

    const displayMessage = function (msg, element,duration){
        element.innerHTML = msg
        setTimeout(()=>element.innerHTML = '',duration)
    }

    puerta.addEventListener('click', async ()=>{
                if(!timeLapse){
                    var request = new Request('http://192.168.1.2/puerta/abrir.php', {
            method: 'POST', 
            mode: 'cors', 
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'text/plain'
            })
        });

// Now use it!
fetch(request).then(function() { console.log('funciona') });
                // fetch('http://192.168.1.2/puerta/abrir.php',{method:'POST', mode: 'cors'})
                timeLapse = true
                setTimeout(()=>{timeLapse = false},3000)
                puerta.classList.add('disabled')
                setTimeout(()=>{puerta.classList.remove('disabled')},2000)
                displayMessage('LISLOOOOO',message,3000)
                
            }else{
                displayMessage('Tenes que esperar papurri.',message,1500)
            }
        });




   
})
