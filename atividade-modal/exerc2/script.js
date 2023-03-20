const btnResultado = document.getElementById('btnPromocao');
   
            btnResultado.addEventListener('click', () => {
   
            let inVeiculo = document.getElementById('inVeiculo').value
            let inPreco = document.getElementById('inPreco').value
   
            let veiculo = inVeiculo;
            let preco2 = inPreco * 0.5
            let parcela = preco2 / 12

            outVeiculo.textContent = `veiculo ${veiculo}`
            outPreco.textContent = `entrada de R$ ${preco2}`
            outEntrada.textContent = `12x de ${parcela.toFixed(2)}`

 });