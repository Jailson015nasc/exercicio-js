const btnResultado = document.getElementById('btnResultado');
   
            btnResultado.addEventListener('click', () => {
   
            let inQuilo = document.getElementById('inQuilo').value
            let inConsumo = document.getElementById('inConsumo').value
   
            let pagar = (inQuilo * inConsumo) /100

            outQuilo.textContent = `valor a pagar R$ ${pagar}`

 });